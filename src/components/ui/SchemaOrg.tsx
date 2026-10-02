import { SITE_CONFIG } from "@/lib/constants";

interface OrganizationSchemaProps {
  url?: string;
}

export function OrganizationSchema({ url = SITE_CONFIG.url }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url,
    // TODO: Add logo URL after brand assets are created
    // logo: `${url}/images/logo.png`,
    // TODO: Add verified contact details before launch
    // contactPoint: {
    //   "@type": "ContactPoint",
    //   telephone: SITE_CONFIG.contact.phone,
    //   contactType: "customer service",
    // },
    // sameAs: [
    //   SITE_CONFIG.social.linkedin,
    //   SITE_CONFIG.social.instagram,
    // ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  url?: string;
}

export function LocalBusinessSchema({ url = SITE_CONFIG.url }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url,
    // TODO: Add verified business information before launch
    // address: {
    //   "@type": "PostalAddress",
    //   streetAddress: "TODO",
    //   addressLocality: "TODO",
    //   addressRegion: "TODO",
    //   postalCode: "TODO",
    //   addressCountry: "IN",
    // },
    // telephone: SITE_CONFIG.contact.phone,
    // email: SITE_CONFIG.contact.email,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
