import { getDictionary } from "@/lib/getDictionary";
import dynamic from "next/dynamic";
import HeroMotion from "./HeroMotion";
import HeroBackground from "./HeroBackground";
import WaterButton from "./WaterButton";

const GiyuVisual = dynamic(() => import("./GiyuVisual"), { ssr: false });

export default async function Hero({ locale }: { locale: "en" | "ja" }) {
  const t = await getDictionary(locale);

  return (
    <section
      id="home"
      className="relative min-h-[70vh]
    md:min-h-screen
    flex
    items-start
    md:items-center
    pt-24
    md:pt-0
 overflow-hidden"
    >
      <HeroBackground />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="relative">
          <p className="text-water text-xs md:text-sm uppercase tracking-wide">
            {t.hero.tag}
          </p>

          <h1 className="mt-3 md:mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            {t.hero.title}
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-ink/70 max-w-xl">
            {t.hero.description}
          </p>
        </div>

        {/* Right: 3D Visual (desktop only) */}
        <div className="hidden md:flex flex-col items-center h-[220px]">
          <div className="flex-1 w-full flex items-center justify-center">
            <HeroMotion>
              <GiyuVisual />
            </HeroMotion>
          </div>

          <div className="mt-6 cursor-pointer">
            <WaterButton
              href="#cv"
              className="inline-block bg-water text-white px-6 py-3 rounded-md transition"
            >
              {t.hero.cta}
            </WaterButton>
          </div>
        </div>
        <div className="mt-6 md:hidden text-ink/40 text-xs">↓ Scroll</div>
      </div>
    </section>
  );
}
