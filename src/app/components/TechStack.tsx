import Reveal from "./Reveal";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n-config";

export default async function TechStack({ locale }: { locale: Locale }) {
  const t = await getDictionary(locale);

  const sections = [t.stack.core, t.stack.ui, t.stack.tools];

  return (
    <section id="stack" className="py-24 bg-mist">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <p className="text-water text-sm uppercase tracking-wide">
              {t.stack.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold">{t.stack.title}</h2>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-white border border-stone rounded-lg p-6 snap-start transition hover:border-water"
            >
              <h3 className="text-lg font-medium mb-4">{section.title}</h3>

              <ul className="flex flex-wrap gap-2">
                {section.items.map((item: string) => (
                  <li
                    key={item}
                    className="text-sm px-3 py-1 rounded border border-stone text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
