"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Clock, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui";
import { EditorialHeading, QuoteBlock, WaveDivider } from "@/components/decorative";
import { FEATURED_CATEGORIES } from "@/data/categories";
import { BUSINESS_INFO, BUSINESS_HOURS, isCurrentlyOpen } from "@/lib/constants";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const isOpen = isCurrentlyOpen();

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/fish-chips-hero.jpg"
            alt="Fresh fish and chips"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-deep)]/95 via-[var(--bg-deep)]/80 to-[var(--bg-deep)]/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-[var(--bg-deep)]/30 z-10" />
        </div>

        {/* Open/Closed Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-20"
        >
          <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${isOpen ? "bg-[var(--success)] animate-pulse" : "bg-red-500"}`}
            />
            <span className="text-sm font-medium">
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--accent)] font-accent text-lg md:text-xl tracking-wider mb-4"
            >
              SAWBRIDGEWORTH&apos;S FINEST
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-display text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)] mb-6"
            >
              Fresh From
              <br />
              <span className="text-gradient-gold">The Fryer</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mb-8"
            >
              Premium fish and chips, kebabs, burgers, and more.
              Made fresh daily with the finest ingredients.
              Food Hygiene Rating 5.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Link href="/menu">
                <Button
                  size="lg"
                  rightIcon={<ChevronRight className="w-5 h-5" />}
                  className="animate-pulse-cta"
                >
                  Order Now
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="secondary" size="lg">
                  View Menu
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <WaveDivider className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MENU PREVIEW SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-deep">
        <div className="container-custom">
          <EditorialHeading
            as="h2"
            subtitle="Explore our freshly prepared menu categories"
            center
          >
            Our Menu
          </EditorialHeading>

          {/* Category Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {FEATURED_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                custom={index}
              >
                <Link
                  href={`/menu/${category.slug}`}
                  className="group block text-center"
                >
                  {/* Circular Thumbnail */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
                    <div
                      className="
                        w-full h-full rounded-full
                        bg-[var(--bg-surface)] border-2 border-[var(--bg-subtle)]
                        overflow-hidden
                        transition-all duration-300
                        group-hover:border-[var(--accent)]
                        group-hover:shadow-[0_0_30px_var(--accent-glow)]
                        group-hover:scale-105
                      "
                    >
                      <Image
                        src={
                          category.id === "fish" ? "/images/categories/fish.jpg" :
                          category.id === "kebabs" ? "/images/categories/kebab.jpg" :
                          category.id === "burgers" ? "/images/categories/burger.jpg" :
                          category.id === "usa-fried-chicken" ? "/images/categories/chicken.jpg" :
                          category.id === "kids-meal" ? "/images/categories/kids.jpg" :
                          category.id === "drinks" ? "/images/categories/drinks.jpg" :
                          "/images/categories/fish.jpg"
                        }
                        alt={category.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </div>
                  </div>

                  {/* Category Name */}
                  <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {category.itemCount} items
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View Full Menu Link */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/menu"
              className="
                inline-flex items-center gap-2
                text-[var(--accent)] hover:text-[var(--accent-hover)]
                font-medium transition-colors
              "
            >
              View Full Menu
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ABOUT SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-[var(--bg-surface)]">
        <WaveDivider flip className="absolute -top-[60px] md:-top-[80px]" />

        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <EditorialHeading as="h2">
                A Tradition of Excellence
              </EditorialHeading>

              <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
                At Rumbles Fish Bar, we take pride in serving Sawbridgeworth with
                the finest fish and chips for generations. Every piece of fish is
                freshly battered, every chip hand-cut, and every meal made with love.
              </p>

              <QuoteBlock author="Our Promise" className="mt-8">
                Every bite gives you a joy and wonderful experience.
                For sure one of my favourite foods in this world.
              </QuoteBlock>

              {/* Hygiene Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-8 inline-flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-elevated)]"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[var(--rating)] text-[var(--rating)]"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    Food Hygiene Rating
                  </div>
                  <div className="font-semibold text-[var(--accent)]">
                    Very Good
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/about/chippy-interior.jpg"
                  alt="Inside our fish bar"
                  fill
                  className="object-cover"
                  quality={85}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)]/60 to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 badge-fresh">
                  Since 1990
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUICK RESERVATION SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-deep">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <EditorialHeading
              as="h2"
              subtitle="Book a table for dine-in service"
              center
            >
              Reserve Your Table
            </EditorialHeading>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 glass rounded-2xl p-6 md:p-8"
            >
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-2">
                    Time
                  </label>
                  <select className="input">
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-2">
                    Guests
                  </label>
                  <select className="input">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/reservation" className="block">
                  <Button fullWidth size="lg">
                    Reserve Table
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOURS & LOCATION SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[var(--bg-surface)]">
        <div className="container-custom">
          <EditorialHeading as="h2" center>
            Visit Us
          </EditorialHeading>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[var(--bg-elevated)]">
                  <Clock className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold">Opening Hours</h3>
              </div>

              <div className="space-y-3">
                {BUSINESS_HOURS.map((hours) => {
                  const today = new Date().toLocaleDateString("en-GB", { weekday: "long" });
                  const isToday = hours.day === today;

                  return (
                    <div
                      key={hours.day}
                      className={`
                        flex justify-between p-3 rounded-xl
                        ${isToday ? "bg-[var(--accent)]/10 border border-[var(--accent)]/30" : "bg-[var(--bg-elevated)]"}
                      `}
                    >
                      <span className={isToday ? "text-[var(--accent)] font-medium" : "text-[var(--text-secondary)]"}>
                        {hours.day}
                        {isToday && <span className="ml-2 text-xs">(Today)</span>}
                      </span>
                      <span className="font-medium">
                        {hours.isClosed ? "Closed" : `${hours.open} - ${hours.close}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[var(--bg-elevated)]">
                  <MapPin className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-[var(--bg-elevated)] overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[var(--accent)] mx-auto mb-4" />
                    <p className="text-[var(--text-primary)] font-medium">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-[var(--accent)] hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Quick Links */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="
                    flex items-center gap-2 px-4 py-2 rounded-xl
                    bg-[var(--bg-elevated)] hover:bg-[var(--bg-subtle)]
                    transition-colors
                  "
                >
                  <Phone className="w-4 h-4 text-[var(--accent)]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
