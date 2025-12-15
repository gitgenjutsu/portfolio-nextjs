import { getDictionary } from "@/lib/getDictionary";
import Reveal from "./Reveal";

export default async function Projects({ locale }: { locale: "en" | "ja" }) {
  const t = await getDictionary(locale);

  type ProjectId = "bento" | "inventory" | "coupon" | "pfrda";
  const projects: {
    id: ProjectId;
    tech: string[];
    link?: string;
    noLink?: string;
  }[] = [
    {
      id: "bento",
      tech: ["React", "Next Js", "Tailwind", "Node.js", "i18n"],
      link: "https://bentobox-blush.vercel.app/",
    },
    {
      id: "inventory",
      tech: ["React.js", "TypeScript", "APIs"],
    },
    {
      id: "coupon",
      tech: ["React", "Next Js", "REST APIs"],
    },
    {
      id: "pfrda",
      tech: ["Next Js", "Redux", "Yup", "Jest"],
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-10">
            <p className="text-water text-sm uppercase tracking-wide">
              {t.projects.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold">{t.projects.title}</h2>
          </div>
        </Reveal>

        {/* Horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {projects.map((project) => {
            const content = t.projects.items[project.id];

            return (
              <article
                key={project.id}
                className="min-w-[320px] max-w-[360px] bg-white border border-stone rounded-lg p-6 snap-start transition hover:border-water"
              >
                <h3 className="text-xl font-medium">{content.title}</h3>

                <p className="mt-3 text-sm text-ink/70">
                  {content.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-ink/60">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="border border-stone px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-sm text-water hover:underline"
                  >
                    {t.projects.cta}
                  </a>
                ) : (
                  <span className="inline-block mt-6 text-sm text-ink/50">
                    {" "}
                    {t.projects.noLink}{" "}
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
