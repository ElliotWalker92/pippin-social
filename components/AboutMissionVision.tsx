import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { aboutPage } from "@/lib/content";

export function AboutMissionVision() {
  const { missionVision } = aboutPage;

  return (
    <section className="border-t border-stone bg-stone/40 py-24 lg:py-32">
      <Container>
        <FadeIn>
          <h2 className="text-center font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {missionVision.heading}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h3 className="font-sans text-xs tracking-widest-plus text-charcoal/70 uppercase">
              {missionVision.mission.title}
            </h3>
            <p className="mt-4 font-serif text-2xl leading-snug font-light text-softblack sm:text-3xl">
              {missionVision.mission.body}
            </p>
          </FadeIn>

          <FadeIn delayMs={150}>
            <h3 className="font-sans text-xs tracking-widest-plus text-charcoal/70 uppercase">
              {missionVision.vision.title}
            </h3>
            <p className="mt-4 font-serif text-2xl leading-snug font-light text-softblack sm:text-3xl">
              {missionVision.vision.body}
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
