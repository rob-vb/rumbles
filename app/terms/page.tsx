"use client";

import { motion } from "framer-motion";
import { EditorialHeading } from "@/components/decorative";
import { BUSINESS_INFO } from "@/lib/constants";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing and using the Rumbles Fish Bar website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    id: "services",
    title: "Our Services",
    content: `Rumbles Fish Bar provides:

- A restaurant and takeaway service offering fish and chips, kebabs, burgers, and related food items
- An online menu and ordering information
- Table reservation services
- Contact and enquiry facilities

We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.`,
  },
  {
    id: "reservations",
    title: "Reservations",
    content: `**Making Reservations:**
Reservations can be made through our website or by phone. All reservations are subject to availability.

**Cancellation Policy:**
Please notify us at least 4 hours in advance if you need to cancel or modify your reservation. For parties of 6 or more, we require 24 hours notice.

**No-Shows:**
We may refuse future reservations for customers who repeatedly fail to honour their bookings without notice.

**Table Holding:**
We will hold your table for 15 minutes past the reservation time. After this, the table may be released to other customers.`,
  },
  {
    id: "orders",
    title: "Orders and Payment",
    content: `**Pricing:**
All prices displayed are in British Pounds (GBP) and include VAT where applicable. We reserve the right to change prices at any time.

**Payment:**
We accept cash, major credit/debit cards, and contactless payments. Payment is required at the time of collection or service.

**Order Accuracy:**
Please check your order upon receipt. Issues must be reported immediately while still at our premises.`,
  },
  {
    id: "allergens",
    title: "Allergens and Dietary Requirements",
    content: `**Allergen Information:**
Our food may contain or be prepared alongside allergens including gluten, crustaceans, eggs, fish, peanuts, soybeans, milk, nuts, celery, mustard, sesame, sulphites, lupin, and molluscs.

**Customer Responsibility:**
Please inform our staff of any allergies or dietary requirements when ordering. While we take precautions, we cannot guarantee a completely allergen-free environment.

**Cross-Contamination:**
All our food is prepared in a kitchen where allergens are present. Cross-contamination may occur despite our best efforts.`,
  },
  {
    id: "website-use",
    title: "Website Use",
    content: `**Acceptable Use:**
You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.

**Prohibited Activities:**
You may not:
- Attempt to gain unauthorised access to our systems
- Introduce malicious software or code
- Use automated tools to scrape or copy content
- Misrepresent your identity or affiliation

**Intellectual Property:**
All content on this website, including text, graphics, logos, and images, is owned by or licensed to Rumbles Fish Bar and is protected by copyright law.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: `**Service Availability:**
We strive to provide excellent service but cannot guarantee uninterrupted availability. We are not liable for any losses arising from service interruptions or delays.

**Food Quality:**
While we maintain high standards, we are not liable for adverse reactions unless caused by our negligence. Please consume food promptly after collection.

**Website Content:**
Information on our website is provided for general purposes. We do not warrant its accuracy or completeness.

**Maximum Liability:**
Our total liability to you for any claim shall not exceed the amount paid by you for the relevant service.`,
  },
  {
    id: "complaints",
    title: "Complaints and Disputes",
    content: `**Raising Complaints:**
If you are dissatisfied with our service, please speak to a member of staff immediately or contact us within 24 hours using the details below.

**Resolution:**
We aim to resolve all complaints fairly and promptly. We will acknowledge complaints within 48 hours and provide a full response within 7 days.

**Governing Law:**
These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.`,
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: `We may update these Terms of Service from time to time. Changes will be effective immediately upon posting to this page. Your continued use of our services after changes constitutes acceptance of the modified terms.

We encourage you to review these terms periodically.`,
  },
  {
    id: "contact",
    title: "Contact Information",
    content: `For questions about these Terms of Service, please contact us:

**Rumbles Fish Bar**
${BUSINESS_INFO.address}
Email: ${BUSINESS_INFO.email}
Phone: ${BUSINESS_INFO.phone}

Business Registration: England and Wales`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <EditorialHeading as="h1" center>
              Terms of Service
            </EditorialHeading>
            <p className="text-[var(--text-muted)] mt-4">
              Last updated: January 2024
            </p>
          </div>

          {/* Table of Contents */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)]"
          >
            <h2 className="font-semibold mb-4 text-[var(--accent)]">
              Contents
            </h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Content */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05 }}
                className="scroll-mt-24"
              >
                <h2 className="text-xl font-display font-semibold mb-4 text-[var(--text-primary)]">
                  {index + 1}. {section.title}
                </h2>
                <div className="prose prose-invert max-w-none">
                  {section.content.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[var(--text-secondary)] leading-relaxed mb-4 whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>')
                          .replace(/- (.*)/g, '• $1'),
                      }}
                    />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="#"
              className="text-[var(--accent)] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ↑ Back to top
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
