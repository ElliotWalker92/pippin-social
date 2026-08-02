import Link from "next/link";
import { Container } from "@/components/Container";
import { BrandMark, Wordmark } from "@/components/Logo";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-stone bg-ivory">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-20">
        <div>
          <div className="flex items-center gap-2">
            <BrandMark className="h-6 w-auto" />
          </div>
          <Wordmark className="mt-3" />
          <p className="mt-3 font-sans text-xs tracking-widest-plus text-charcoal/60 uppercase">
            {footer.tagline}
          </p>
          <ul className="mt-6 flex items-center gap-4">
            {footer.social.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-sans text-xs tracking-widest-plus text-charcoal/70 uppercase hover:text-softblack"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-sans text-xs tracking-widest-plus text-charcoal/50 uppercase">
            Navigation
          </h2>
          <ul className="mt-5 space-y-3">
            {footer.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-sans text-sm text-charcoal hover:text-softblack"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-xs tracking-widest-plus text-charcoal/50 uppercase">
            Get in touch
          </h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href={`mailto:${footer.email}`}
                className="font-sans text-sm text-charcoal hover:text-softblack"
              >
                {footer.email}
              </Link>
            </li>
            <li className="font-sans text-sm text-charcoal">
              {footer.location}
            </li>
          </ul>
          <ul className="mt-6 space-y-2">
            <li>
              <Link
                href="#"
                className="font-sans text-xs text-charcoal/60 hover:text-softblack"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-sans text-xs text-charcoal/60 hover:text-softblack"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-stone">
        <Container className="py-6">
          <p className="font-sans text-xs text-charcoal/60">
            {footer.copyright}
          </p>
        </Container>
      </div>
    </footer>
  );
}
