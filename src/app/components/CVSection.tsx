import { getDictionary } from "@/lib/getDictionary";

export default async function CVSection({ locale }: { locale: "en" | "ja" }) {
  const t = await getDictionary(locale);

  const cvUrl = "/cv/Wasim-Software_Dev-EN.pdf";

  return (
    <section id="cv" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-water text-sm uppercase tracking-wide">
          {t.cv.label}
        </p>

        <h2 className="mt-2 text-3xl font-semibold">{t.cv.title}</h2>

        <p className="mt-4 text-ink/70 max-w-xl">{t.cv.description}</p>

        {/* PDF Preview (desktop only) */}
        <div className="hidden md:block mt-10 border border-stone rounded-lg overflow-hidden h-[600px]">
          <iframe src={cvUrl} className="w-full h-full" title="CV Preview" />
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href={cvUrl}
            download
            className="bg-water text-white px-6 py-3 rounded-md hover:bg-water/90 transition text-center"
          >
            {t.cv.download}
          </a>

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone px-6 py-3 rounded-md hover:bg-stone/20 transition text-center"
          >
            {t.cv.open}
          </a>
        </div>
      </div>
    </section>
  );
}
