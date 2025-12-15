import Reveal from "./Reveal";
import { getDictionary } from "@/lib/getDictionary";

export default async function Contact({ locale }: { locale: "en" | "ja" }) {
  const t = await getDictionary(locale);

  return (
    <section id="contact" className="py-32 bg-mist border-t border-stone">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-water text-sm uppercase tracking-wide">
            {t.contact.label}
          </p>

          <h2 className="mt-3 text-4xl font-semibold">{t.contact.title}</h2>
        </Reveal>

        <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto">
          {t.contact.description}
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="mailto:wasimmohdhere@gmail.com"
            className="bg-water text-white px-8 py-4 rounded-md hover:bg-water/90 transition"
          >
            {t.contact.email}
          </a>

          <a
            href="https://www.linkedin.com/in/wasim-mohd/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone px-8 py-4 rounded-md hover:bg-stone/30 transition"
          >
            {t.contact.linkedin}
          </a>
        </div>

        <p className="mt-16 text-sm text-ink/50">
          © {new Date().getFullYear()} Wasim. {t.contact.footer}
        </p>
      </div>
    </section>
  );
}
