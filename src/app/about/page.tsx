import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `TODO: Add a description for the About page of ${SITE_CONFIG.name}.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <section
      aria-labelledby="about-heading"
      className="container-site section-padding"
    >
      <p className="label-overline mb-4">Our Story</p>
      <h1 id="about-heading" className="heading-1 mb-6">
        About Us
      </h1>
      <p className="body-lg max-w-2xl text-neutral-600">
        TODO: Add company history, mission, and values.
      </p>
    </section>
  );
}
