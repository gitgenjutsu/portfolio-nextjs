import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n-config";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getDictionary(params.locale);

  const isJa = params.locale === "ja";

  return {
    title: isJa
      ? "Wasim｜フロントエンドエンジニア（React / Next.js）"
      : "Wasim — Frontend Engineer (React & Next.js)",

    description: isJa
      ? "React・Next.jsを用いたモダンなUI開発を行うフロントエンドエンジニア。パフォーマンス、アクセシビリティ、設計品質を重視。"
      : "Frontend engineer specializing in React and Next.js, focused on performance, accessibility, and clean UI architecture.",

    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        en: "/en",
        ja: "/ja",
      },
    },

    openGraph: {
      title: isJa
        ? "Wasim｜フロントエンドエンジニア"
        : "Wasim — Frontend Engineer",
      description: isJa
        ? "React・Next.jsを中心としたフロントエンド開発。"
        : "Frontend engineer building modern React & Next.js applications.",
      url: `https://your-domain.com/${params.locale}`,
      siteName: "Wasim Portfolio",
      images: [
        {
          url: params.locale === "ja" ? "/og-ja.png" : "/og-en.png",
          width: 1200,
          height: 630,
          alt: "Wasim Portfolio",
        },
      ],
      locale: isJa ? "ja_JP" : "en_US",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
