import { getDictionary } from "@/lib/getDictionary";
import Reveal from "./Reveal";

export type EducationId = "mca" | "certification" | "bca";
type EducationCopy = {
  degree: string;
};

export const education: {
  id: EducationId;
  college: string;
  period: string;
}[] = [
  {
    id: "mca",
    college: "LPU (Lovely Professional University)",
    period: "Jan 2024 – Present",
  },
  {
    id: "certification",
    college: "ADMEC Institute",
    period: "Aug 2019 – Aug 2020",
  },
  {
    id: "bca",
    college: "IGNOU (Indira Gandhi National Open University)",
    period: "Jun 2015 – Jun 2018",
  },
];

export default async function Education({ locale }: { locale: "en" | "ja" }) {
  const t = await getDictionary(locale);
  const items = t.education.items as Record<EducationId, EducationCopy>;

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <p className="text-water text-sm uppercase tracking-wide">
              {t.education.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold">{t.education.title}</h2>
          </div>
        </Reveal>

        <div className="space-y-12 border-l border-stone pl-6">
          {education.map((edu) => {
            const content = items[edu.id];

            return (
              <div key={edu.id} className="relative">
                <span className="absolute -left-[20px] top-2 w-2 h-2 rounded-full bg-water" />

                <h3 className="text-xl font-medium">{content.degree}</h3>

                <p className="mt-1 text-sm text-ink/70">
                  {edu.college} • {edu.period}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
