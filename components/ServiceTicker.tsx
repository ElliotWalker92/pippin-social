import Link from "next/link";
import { serviceTicker } from "@/lib/content";

export function ServiceTicker() {
  return (
    <section className="border-y border-stone py-6" aria-label="Our services">
      {/*
        The row stays on one line at every width. `w-max` + `mx-auto` centres it
        while it fits and, once it's wider than the screen, collapses the auto
        margins so it left-aligns and scrolls instead of wrapping.
      */}
      <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="mx-auto flex w-max items-center gap-x-3 px-6 lg:px-12">
          {serviceTicker.map((service, i) => (
            <li key={service.label} className="flex items-center gap-3">
              <Link
                href={service.href}
                className="font-sans text-xs whitespace-nowrap tracking-widest-plus text-charcoal uppercase transition-colors hover:text-softblack"
              >
                {service.label}
              </Link>
              {i < serviceTicker.length - 1 && (
                <span aria-hidden="true" className="text-sage">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
