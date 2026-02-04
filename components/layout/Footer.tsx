"use client";

import Link from "next/link";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import { BUSINESS_INFO, BUSINESS_HOURS, NAV_LINKS } from "@/lib/constants";
import { CATEGORIES } from "@/data/categories";
import { WaveDivider } from "@/components/decorative";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-[var(--bg-surface)]">
      {/* Wave divider at top */}
      <WaveDivider flip className="absolute -top-[60px] md:-top-[80px] left-0 right-0" />

      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Navigation */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-3xl font-accent tracking-wider text-[var(--accent)]">
                RUMBLES
              </span>
            </Link>
            <p className="mt-4 text-[var(--text-secondary)] text-sm leading-relaxed">
              Sawbridgeworth&apos;s finest fish & chips since generations.
              Fresh from the fryer, made with love.
            </p>

            <nav className="mt-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    block text-[var(--text-secondary)] hover:text-[var(--accent)]
                    text-sm transition-colors duration-200
                  "
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reservation"
                className="
                  block text-[var(--text-secondary)] hover:text-[var(--accent)]
                  text-sm transition-colors duration-200
                "
              >
                Reservation
              </Link>
            </nav>
          </div>

          {/* Column 2: Menu Categories */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Our Menu
            </h3>
            <nav className="space-y-2">
              {CATEGORIES.slice(0, 8).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/menu/${cat.slug}`}
                  className="
                    block text-[var(--text-secondary)] hover:text-[var(--accent)]
                    text-sm transition-colors duration-200
                  "
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/menu"
                className="
                  block text-[var(--accent)] hover:text-[var(--accent-hover)]
                  text-sm font-medium transition-colors duration-200
                "
              >
                View All →
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start gap-3 text-[var(--text-secondary)]
                  hover:text-[var(--accent)] transition-colors duration-200
                "
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{BUSINESS_INFO.address}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="
                  flex items-center gap-3 text-[var(--text-secondary)]
                  hover:text-[var(--accent)] transition-colors duration-200
                "
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="
                  flex items-center gap-3 text-[var(--text-secondary)]
                  hover:text-[var(--accent)] transition-colors duration-200
                "
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{BUSINESS_INFO.email}</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={BUSINESS_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2 rounded-lg bg-[var(--bg-elevated)]
                    text-[var(--text-secondary)] hover:text-[var(--accent)]
                    hover:bg-[var(--bg-subtle)]
                    transition-all duration-200
                  "
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={BUSINESS_INFO.social.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2 rounded-lg bg-[var(--bg-elevated)]
                    text-[var(--text-secondary)] hover:text-[var(--accent)]
                    hover:bg-[var(--bg-subtle)]
                    transition-all duration-200
                  "
                  aria-label="TripAdvisor"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-6.001c0-1.63-.65-3.107-1.704-4.188L24 6.648h-4.357a13.573 13.573 0 0 0-7.637-2.353zM6.003 17.206a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm11.994 0a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM6.003 11.207a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm11.994 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Opening Hours
            </h3>
            <div className="space-y-2">
              {BUSINESS_HOURS.map((hours) => (
                <div
                  key={hours.day}
                  className="flex justify-between text-sm text-[var(--text-secondary)]"
                >
                  <span>{hours.day}</span>
                  <span>
                    {hours.isClosed
                      ? "Closed"
                      : `${hours.open} - ${hours.close}`}
                  </span>
                </div>
              ))}
            </div>

            {/* Food Hygiene Badge */}
            <div className="mt-6 p-4 rounded-xl bg-[var(--bg-elevated)] text-center">
              <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Food Hygiene Rating
              </div>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl text-[var(--rating)]">★</span>
                ))}
              </div>
              <div className="text-[var(--accent)] font-semibold mt-1">
                Very Good
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--bg-subtle)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[var(--text-muted)]">We Accept:</span>
              <div className="flex items-center gap-2">
                {/* Simplified payment icons */}
                <div className="w-10 h-6 rounded bg-[var(--bg-elevated)] flex items-center justify-center text-[10px] font-bold text-[var(--text-secondary)]">
                  VISA
                </div>
                <div className="w-10 h-6 rounded bg-[var(--bg-elevated)] flex items-center justify-center text-[10px] font-bold text-[var(--text-secondary)]">
                  MC
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-[var(--text-muted)] text-center">
              © {currentYear}{" "}
              <span className="text-[var(--accent)]">Rumbles Fish Bar</span>.
              All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/privacy-policy"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
