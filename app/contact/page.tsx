"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditorialHeading } from "@/components/decorative";
import { Button, Input, Textarea } from "@/components/ui";
import { BUSINESS_INFO, BUSINESS_HOURS } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form data:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <EditorialHeading
            as="h1"
            subtitle="We'd love to hear from you"
            center
          >
            Contact Us
          </EditorialHeading>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-6">
              {/* Address */}
              <motion.a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="
                  flex items-start gap-4 p-5 rounded-2xl
                  bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
                  hover:border-[var(--accent)] transition-colors
                "
              >
                <div className="p-3 rounded-xl bg-[var(--bg-elevated)]">
                  <MapPin className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-[var(--text-secondary)]">
                    {BUSINESS_INFO.address}
                  </p>
                  <span className="text-sm text-[var(--accent)] mt-2 inline-block">
                    Get Directions →
                  </span>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${BUSINESS_INFO.phone}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="
                  flex items-start gap-4 p-5 rounded-2xl
                  bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
                  hover:border-[var(--accent)] transition-colors
                "
              >
                <div className="p-3 rounded-xl bg-[var(--bg-elevated)]">
                  <Phone className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-[var(--text-secondary)]">
                    {BUSINESS_INFO.phone}
                  </p>
                  <span className="text-sm text-[var(--accent)] mt-2 inline-block">
                    Call Now →
                  </span>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${BUSINESS_INFO.email}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="
                  flex items-start gap-4 p-5 rounded-2xl
                  bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
                  hover:border-[var(--accent)] transition-colors
                "
              >
                <div className="p-3 rounded-xl bg-[var(--bg-elevated)]">
                  <Mail className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-[var(--text-secondary)]">
                    {BUSINESS_INFO.email}
                  </p>
                  <span className="text-sm text-[var(--accent)] mt-2 inline-block">
                    Send Email →
                  </span>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)]">
                    <Clock className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-semibold">Opening Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {BUSINESS_HOURS.map((hours) => (
                    <div
                      key={hours.day}
                      className="flex justify-between text-[var(--text-secondary)]"
                    >
                      <span>{hours.day}</span>
                      <span>
                        {hours.isClosed ? "Closed" : `${hours.open} - ${hours.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <a
                  href={BUSINESS_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-3 rounded-xl
                    bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
                    hover:border-[var(--accent)] transition-colors
                  "
                >
                  <Facebook className="w-5 h-5 text-[var(--accent)]" />
                  <span>Facebook</span>
                </a>
                <a
                  href={BUSINESS_INFO.social.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-3 rounded-xl
                    bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
                    hover:border-[var(--accent)] transition-colors
                  "
                >
                  <span>TripAdvisor</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)]"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--success)]/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[var(--success)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Thank you for contacting us. We&apos;ll get back to you soon.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                    Send Another Message
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)]"
              >
                <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>

                <div className="space-y-5">
                  <Input
                    label="Your Name"
                    placeholder="John Doe"
                    error={errors.name?.message}
                    {...register("name")}
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />

                  <Input
                    label="Phone Number (Optional)"
                    type="tel"
                    placeholder="01onal234 567890"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />

                  <Textarea
                    label="Your Message"
                    placeholder="How can we help you?"
                    error={errors.message?.message}
                    {...register("message")}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    isLoading={isLoading}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="aspect-[2/1] md:aspect-[3/1] rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)] overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
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
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
