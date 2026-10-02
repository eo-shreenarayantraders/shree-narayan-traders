import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-brand-900 text-white">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="mb-3 text-lg font-bold tracking-tight">
              {SITE_CONFIG.name}
            </p>
            <p className="body-base max-w-xs text-neutral-300">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <p className="label-overline mb-4 text-neutral-400">Navigation</p>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-base text-neutral-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-overline mb-4 text-neutral-400">Contact</p>
            <address className="body-base not-italic text-neutral-300">
              <p>TODO: Address</p>
              <p className="mt-1">TODO: Phone</p>
              <p className="mt-1">TODO: Email</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="body-base text-neutral-400">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
