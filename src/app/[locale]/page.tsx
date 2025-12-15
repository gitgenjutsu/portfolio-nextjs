import type { Locale } from "@/lib/i18n-config";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Education from "../components/Education";
import CVSection from "../components/CVSection";
import { getDictionary } from "@/lib/getDictionary";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  return (
    <>
      <Header labels={t.nav} />
      <main className="pt-16">
        <Hero locale={params.locale} />
        <Projects locale={params.locale} />
        <Experience locale={params.locale} />
        <Education locale={params.locale} />
        <CVSection locale={params.locale} />
        <Contact locale={params.locale} />
      </main>
    </>
  );
}
