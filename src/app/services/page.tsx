import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `TODO: Add a description for the Services page of ${SITE_CONFIG.name}.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <section
      aria-labelledby="services-heading"
      className="container-site section-padding"
    >
      <p className="label-overline mb-4">What We Do</p>
      <h1 id="services-heading" className="heading-1 mb-6">
        Our Services
      </h1>
      <p className="body-lg max-w-2xl text-neutral-600">
        TODO: Add a list of services offered.
      </p>
    </section>
  );
}
