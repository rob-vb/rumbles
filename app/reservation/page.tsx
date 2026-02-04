"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Phone, User, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditorialHeading } from "@/components/decorative";
import { Button, Input, Textarea } from "@/components/ui";
import { BUSINESS_INFO, BUSINESS_HOURS } from "@/lib/constants";

const reservationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.string().min(1, "Please select number of guests"),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const TIME_SLOTS = [
  "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00",
];

const GUEST_OPTIONS = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5 Guests",
  "6 Guests",
  "7 Guests",
  "8+ Guests (call us)",
];

export default function ReservationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      time: "18:00",
      guests: "2 Guests",
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Reservation data:", data);
    setSubmittedData(data);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Max date (3 months ahead)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-deep)] via-[var(--bg-surface)]/50 to-[var(--bg-deep)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0a500' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <EditorialHeading
            as="h1"
            subtitle="Book a table for dine-in service"
            center
          >
            Reserve Your Table
          </EditorialHeading>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {isSubmitted && submittedData ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[var(--bg-subtle)]"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--success)]/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[var(--success)]" />
                  </div>
                  <h2 className="text-2xl font-display font-semibold mb-2">
                    Reservation Confirmed!
                  </h2>
                  <p className="text-[var(--text-secondary)] mb-8">
                    We&apos;ve sent a confirmation email to {submittedData.email}
                  </p>

                  {/* Reservation Details */}
                  <div className="p-6 rounded-xl bg-[var(--bg-elevated)] text-left space-y-4 mb-8">
                    <h3 className="font-semibold text-center mb-4">
                      Reservation Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[var(--accent)]" />
                        <div>
                          <p className="text-xs text-[var(--text-muted)]">Date</p>
                          <p className="font-medium">
                            {new Date(submittedData.date).toLocaleDateString("en-GB", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[var(--accent)]" />
                        <div>
                          <p className="text-xs text-[var(--text-muted)]">Time</p>
                          <p className="font-medium">{submittedData.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-[var(--accent)]" />
                        <div>
                          <p className="text-xs text-[var(--text-muted)]">Party Size</p>
                          <p className="font-medium">{submittedData.guests}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-[var(--accent)]" />
                        <div>
                          <p className="text-xs text-[var(--text-muted)]">Name</p>
                          <p className="font-medium">{submittedData.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setSubmittedData(null);
                        reset();
                      }}
                      variant="secondary"
                    >
                      Make Another Reservation
                    </Button>
                    <a href={`tel:${BUSINESS_INFO.phone}`}>
                      <Button variant="ghost">
                        <Phone className="w-4 h-4 mr-2" />
                        Call to Modify
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[var(--bg-subtle)]"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Date, Time, Guests Row */}
                  <div className="grid md:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4 inline mr-2 text-[var(--accent)]" />
                        Date
                      </label>
                      <input
                        type="date"
                        min={minDate}
                        max={maxDateStr}
                        {...register("date")}
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-[var(--bg-elevated)] border border-[var(--bg-subtle)]
                          text-[var(--text-primary)]
                          focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)]
                          transition-colors
                        "
                      />
                      {errors.date && (
                        <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Clock className="w-4 h-4 inline mr-2 text-[var(--accent)]" />
                        Time
                      </label>
                      <select
                        {...register("time")}
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-[var(--bg-elevated)] border border-[var(--bg-subtle)]
                          text-[var(--text-primary)]
                          focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)]
                          transition-colors
                        "
                      >
                        {TIME_SLOTS.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Users className="w-4 h-4 inline mr-2 text-[var(--accent)]" />
                        Guests
                      </label>
                      <select
                        {...register("guests")}
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-[var(--bg-elevated)] border border-[var(--bg-subtle)]
                          text-[var(--text-primary)]
                          focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)]
                          transition-colors
                        "
                      >
                        {GUEST_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.guests && (
                        <p className="text-red-400 text-sm mt-1">{errors.guests.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="pt-4 border-t border-[var(--bg-subtle)]">
                    <h3 className="text-sm font-medium text-[var(--text-muted)] mb-4">
                      Contact Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        label="Full Name"
                        placeholder="John Doe"
                        error={errors.name?.message}
                        {...register("name")}
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="01234 567890"
                        error={errors.phone?.message}
                        {...register("phone")}
                      />
                    </div>
                    <div className="mt-5">
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        error={errors.email?.message}
                        {...register("email")}
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Textarea
                      label="Special Requests (Optional)"
                      placeholder="Any dietary requirements, special occasions, or seating preferences..."
                      {...register("specialRequests")}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    isLoading={isLoading}
                  >
                    Confirm Reservation
                  </Button>

                  <p className="text-center text-sm text-[var(--text-muted)]">
                    For parties larger than 8 or same-day reservations,
                    please call us at{" "}
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-[var(--accent)] hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Opening Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)]"
          >
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[var(--accent)]" />
              Opening Hours
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
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
        </div>
      </div>
    </div>
  );
}
