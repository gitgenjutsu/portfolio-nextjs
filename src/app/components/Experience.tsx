import Reveal from "./Reveal";
import { getDictionary } from "@/lib/getDictionary";

type ExperienceCopy = {
  role: string;
  points: string[];
};
export type ExperienceId = "programming" | "panorama" | "freelance";

export const experiences: {
  id: ExperienceId;
  company: string;
  period: string;
}[] = [
  {
    id: "programming",
    company: "Programming.com (Mobile Programming India Pvt. Ltd.)",
    period: "Sep 2024 – Present",
  },
  {
    id: "panorama",
    company: "Panorama Solutions",
    period: "Dec 2020 – Sep 2024",
  },
  {
    id: "freelance",
    company: "Online",
    period: "Aug 2018 – Jul 2019",
  },
];

export default async function Experience({ locale }: { locale: "en" | "ja" }) {
  const t = await getDictionary(locale);
  const items = t.experience.items as Record<ExperienceId, ExperienceCopy>;

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <p className="text-water text-sm uppercase tracking-wide">
              {t.experience.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              {t.experience.title}
            </h2>
          </div>
        </Reveal>

        <div className="space-y-12 border-l border-stone pl-6">
          {experiences.map((exp) => {
            const content = items[exp.id];

            return (
              <div key={exp.id} className="relative">
                <span className="absolute -left-[20px] top-2 w-2 h-2 rounded-full bg-water" />

                <h3 className="text-xl font-medium">{content.role}</h3>

                <p className="mt-1 text-sm text-ink/70">
                  {exp.company} • {exp.period}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-ink/80">
                  {content.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
