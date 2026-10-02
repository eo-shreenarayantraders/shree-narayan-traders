import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-white">
      <section
        aria-labelledby="placeholder-heading"
        className="container-site py-24 text-center"
      >
        <p className="label-overline mb-4">Construction &amp; Engineering</p>
        <h1
          id="placeholder-heading"
          className="heading-display mb-6 text-brand-900"
        >
          Shree Narayan Traders
        </h1>
        <p className="body-lg mx-auto max-w-xl text-neutral-600">
          Official Website
        </p>
      </section>
    </div>
  );
}
