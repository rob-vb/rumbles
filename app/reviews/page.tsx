"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditorialHeading, WaveDivider } from "@/components/decorative";
import { Button, Input, Textarea } from "@/components/ui";

const reviewSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  title: z.string().min(3, "Title is required"),
  message: z.string().min(20, "Review must be at least 20 characters"),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

// Sample reviews data
const SAMPLE_REVIEWS = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    title: "Best fish and chips in Hertfordshire!",
    message:
      "We've been coming to Rumbles for years and the quality never disappoints. The fish is always fresh, perfectly battered, and the chips are proper chippy chips. Staff are friendly and the portions are generous. Highly recommend the cod!",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "James T.",
    rating: 5,
    title: "A local gem",
    message:
      "Found this place after moving to Sawbridgeworth and it's become our go-to for Friday night dinner. The kebabs are excellent too - proper doner, not the processed stuff. Quick service even when busy.",
    date: "2024-01-10",
  },
  {
    id: "3",
    name: "Emma W.",
    rating: 4,
    title: "Great food, lovely staff",
    message:
      "Always a pleasure visiting Rumbles. The mushy peas are homemade and delicious. Only reason for 4 stars is sometimes the wait can be a bit long on Saturday evenings, but worth it for the quality.",
    date: "2024-01-05",
  },
  {
    id: "4",
    name: "David H.",
    rating: 5,
    title: "Traditional chippy done right",
    message:
      "In a world of average takeaways, Rumbles stands out. Everything tastes fresh and made with care. The kids meal portions are perfect for little ones. We're customers for life!",
    date: "2023-12-28",
  },
  {
    id: "5",
    name: "Lisa P.",
    rating: 5,
    title: "Outstanding quality",
    message:
      "The smash burgers here are incredible - juicy, flavourful, and properly seasoned. Fish and chips are the star though. Clean shop, friendly service, fair prices. What more could you want?",
    date: "2023-12-20",
  },
  {
    id: "6",
    name: "Michael R.",
    rating: 5,
    title: "Worth the trip",
    message:
      "We drive from Bishop's Stortford specifically for Rumbles. The haddock is our favourite - massive portions and always cooked perfectly. The curry sauce is homemade and delicious.",
    date: "2023-12-15",
  },
];

function StarRating({
  rating,
  onRate,
  interactive = false,
}: {
  rating: number;
  onRate?: (rating: number) => void;
  interactive?: boolean;
}) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onRate?.(star)}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          className={`
            ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"}
            transition-transform
          `}
        >
          <Star
            className={`w-6 h-6 ${
              star <= (hoverRating || rating)
                ? "fill-[var(--rating-gold)] text-[var(--rating-gold)]"
                : "text-[var(--bg-subtle)]"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof SAMPLE_REVIEWS)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)] relative"
    >
      {/* Quote decoration */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-[var(--accent)]/20" />

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">
        {review.title}
      </h3>

      {/* Message */}
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
        {review.message}
      </p>

      {/* Author & Date */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--bg-subtle)]">
        <span className="font-medium text-[var(--accent)]">{review.name}</span>
        <span className="text-sm text-[var(--text-muted)]">
          {new Date(review.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </motion.div>
  );
}

export default function ReviewsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [ratingError, setRatingError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: ReviewFormData) => {
    if (selectedRating === 0) {
      setRatingError(true);
      return;
    }
    setRatingError(false);
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Review data:", { ...data, rating: selectedRating });

    setIsLoading(false);
    setIsSubmitted(true);
    reset();
    setSelectedRating(0);
  };

  // Calculate average rating
  const averageRating =
    SAMPLE_REVIEWS.reduce((acc, r) => acc + r.rating, 0) / SAMPLE_REVIEWS.length;

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <EditorialHeading
            as="h1"
            subtitle={`${SAMPLE_REVIEWS.length} reviews from our customers`}
            center
          >
            What Our Customers Say
          </EditorialHeading>

          {/* Average Rating */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <div className="flex items-center gap-2">
              <StarRating rating={Math.round(averageRating)} />
              <span className="text-2xl font-bold text-[var(--accent)]">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-[var(--text-muted)]">Average Rating</span>
          </motion.div>
        </div>

        {/* Write Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)]">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Share Your Experience
            </h2>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--success)]/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[var(--success)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Your review has been submitted and will be published after
                    moderation.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                    Write Another Review
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Star Rating */}
                  <div className="text-center">
                    <label className="block text-sm font-medium mb-2">
                      Your Rating
                    </label>
                    <div className="flex justify-center">
                      <StarRating
                        rating={selectedRating}
                        onRate={setSelectedRating}
                        interactive
                      />
                    </div>
                    {ratingError && (
                      <p className="text-red-400 text-sm mt-2">
                        Please select a rating
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
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
                  </div>

                  <Input
                    label="Review Title"
                    placeholder="Sum up your experience"
                    error={errors.title?.message}
                    {...register("title")}
                  />

                  <Textarea
                    label="Your Review"
                    placeholder="Tell us about your experience..."
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
                    Submit Review
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <WaveDivider className="mb-12" />

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {SAMPLE_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        {/* TripAdvisor Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Read more reviews on TripAdvisor
          </p>
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g656895-d6610856-Reviews-Rumbles_Fish_Bar-Sawbridgeworth_Hertfordshire_England.html"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
              hover:border-[var(--accent)] transition-colors
              text-[var(--text-primary)]
            "
          >
            View on TripAdvisor →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
