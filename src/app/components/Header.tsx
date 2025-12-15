"use client";

import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useOutsideClick } from "@/hooks/useOutsideClicks";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
];

type NavLabels = {
  projects: string;
  experience: string;
  contact: string;
};

export default function Header({ labels }: { labels: NavLabels }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const locale = (params?.locale as string) || "en";

  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);

  const langRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useOutsideClick([langRef], () => setLangOpen(false));
  useOutsideClick([menuRef, toggleRef], () => setMenuOpen(false));

  const switchLocale = (nextLocale: string) => {
    const hash = window.location.hash;

    const newPath = pathname.replace(/^\/(en|ja)/, `/${nextLocale}`);

    router.push(`${newPath}${hash}`, {
      scroll: false,
    });

    setLangOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-mist/80 backdrop-blur border-b border-stone/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-medium tracking-wide">Wasim</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects">{labels.projects}</a>
          <a href="#experience">{labels.experience}</a>
          <a href="#contact">{labels.contact}</a>

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="border border-stone px-3 py-1.5 rounded-md"
            >
              {LANGUAGES.find((l) => l.code === locale)?.label} ▾
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-stone rounded-md">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-mist"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <span
            className={`absolute h-0.5 w-6 bg-ink transition-all duration-300
      ${menuOpen ? "rotate-45" : "-translate-y-2"}
    `}
          />
          <span
            className={`absolute h-0.5 w-6 bg-ink transition-all duration-300
      ${menuOpen ? "opacity-0" : ""}
    `}
          />
          <span
            className={`absolute h-0.5 w-6 bg-ink transition-all duration-300
      ${menuOpen ? "-rotate-45" : "translate-y-2"}
    `}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden bg-mist border-t border-stone">
          <nav className="px-6 py-6 flex flex-col gap-4">
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              {labels.projects}
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              {labels.experience}
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {labels.contact}
            </a>

            <div className="pt-4 mt-4 border-t border-stone/60" />

            {/* Language switch */}
            <div className="flex gap-3">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  className={`px-4 py-2 text-sm rounded-md border transition
              ${
                locale === lang.code
                  ? "bg-water text-white border-water"
                  : "border-stone hover:bg-stone/20"
              }
            `}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
