"use client";

import { motion } from "framer-motion";
import { EditorialHeading } from "@/components/decorative";
import { BUSINESS_INFO } from "@/lib/constants";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `This Privacy Policy explains how Rumbles Fish Bar ("we," "us," or "our") collects, uses, and protects your personal information when you visit our website or use our services. We are committed to protecting your privacy and ensuring your data is handled responsibly.`,
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: `We may collect the following types of information:

**Personal Information:**
- Name and contact details (email, phone number) when you make a reservation or contact us
- Dietary preferences and special requests you share with us
- Payment information when placing orders (processed securely through our payment provider)

**Automatically Collected Information:**
- Browser type and version
- Device information
- IP address
- Pages visited and time spent on our website
- Referring website addresses`,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: `We use your information to:

- Process and manage your reservations and orders
- Respond to your enquiries and provide customer support
- Send confirmation emails for reservations
- Improve our website and services
- Comply with legal obligations
- Send marketing communications (only with your consent)`,
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:

- Remember your preferences
- Understand how you use our website
- Improve our services

You can control cookies through your browser settings. However, disabling cookies may affect some website functionality.`,
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    content: `We do not sell your personal information. We may share your data with:

- Payment processors to handle transactions securely
- Email service providers for sending confirmations
- Analytics providers to help us improve our website

All third parties are required to protect your data and use it only for the purposes we specify.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain your personal information only for as long as necessary to:

- Provide our services to you
- Comply with legal obligations
- Resolve disputes and enforce agreements

Reservation data is typically retained for 12 months after your visit. You can request deletion of your data at any time.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `Under data protection law, you have the right to:

- **Access** - Request a copy of your personal data
- **Rectification** - Ask us to correct inaccurate data
- **Erasure** - Request deletion of your data
- **Restriction** - Ask us to limit processing of your data
- **Portability** - Request your data in a portable format
- **Object** - Object to processing for marketing purposes

To exercise these rights, please contact us using the details below.`,
  },
  {
    id: "security",
    title: "Security",
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes secure servers, encrypted connections (SSL), and regular security assessments.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:

**Rumbles Fish Bar**
${BUSINESS_INFO.address}
Email: ${BUSINESS_INFO.email}
Phone: ${BUSINESS_INFO.phone}`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <EditorialHeading as="h1" center>
              Privacy Policy
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
