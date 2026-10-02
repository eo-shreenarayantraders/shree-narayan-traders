import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description: `TODO: Add a description for the Projects page of ${SITE_CONFIG.name}.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="container-site section-padding"
    >
      <p className="label-overline mb-4">Our Work</p>
      <h1 id="projects-heading" className="heading-1 mb-6">
        Projects
      </h1>
      <p className="body-lg max-w-2xl text-neutral-600">
        TODO: Add a portfolio of completed and ongoing projects.
      </p>
    </section>
  );
}
