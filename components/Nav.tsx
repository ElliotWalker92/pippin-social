"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Wordmark } from "@/components/Logo";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-stone bg-ivory"
          : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <Link
          href="/"
          className="rounded-sm"
          onClick={() => setMenuOpen(false)}
        >
          <Wordmark />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 lg:flex"
        >
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-widest-plus text-charcoal uppercase transition-colors hover:text-softblack"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={nav.cta.href}
            className="border border-sage bg-sage px-6 py-3 font-sans text-xs tracking-widest-plus text-softblack uppercase transition-colors hover:bg-transparent"
          >
            {nav.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-px w-6 bg-softblack transition-transform duration-300",
              menuOpen && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-softblack transition-transform duration-300",
              menuOpen && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-20 z-40 flex flex-col bg-ivory transition-opacity duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col items-center justify-center gap-8"
        >
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl text-softblack"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={nav.cta.href}
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-sage bg-sage px-8 py-4 font-sans text-xs tracking-widest-plus text-softblack uppercase"
          >
            {nav.cta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
