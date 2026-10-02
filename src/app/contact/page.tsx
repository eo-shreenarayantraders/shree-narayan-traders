import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_CONFIG.name}. TODO: Add contact details and form description.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="container-site section-padding"
    >
      <p className="label-overline mb-4">Reach Us</p>
      <h1 id="contact-heading" className="heading-1 mb-6">
        Contact Us
      </h1>
      <p className="body-lg max-w-2xl text-neutral-600">
        TODO: Add contact form and business contact information.
      </p>
    </section>
  );
}
