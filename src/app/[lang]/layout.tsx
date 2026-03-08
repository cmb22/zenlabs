// src/app/[lang]/layout.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale, type Locale } from "@/lib/dictionary";



const siteUrl = "https://zen-labs.de";

const metadataByLocale: Record<
    Locale,
    {
        defaultTitle: string;
        defaultDescription: string;
        ogLocale: string;
    }
> = {
    de: {
        defaultTitle: "Zenlabs – Webdesign & Entwicklung in Berlin",
        defaultDescription:
            "Zenlabs entwickelt moderne Websites für Unternehmen und Selbstständige – mit klarem Design, hoher Performance und einfacher Wartbarkeit.",
        ogLocale: "de_DE",
    },
    en: {
        defaultTitle: "Zenlabs – Web design & development in Berlin",
        defaultDescription:
            "Zenlabs develops modern websites for businesses and independent professionals — with clear design, strong performance and long-term maintainability.",
        ogLocale: "en_GB",
    },
    fr: {
        defaultTitle: "Zenlabs – Design et développement web à Berlin",
        defaultDescription:
            "Zenlabs développe des sites web modernes pour entreprises et indépendants — avec un design clair, de bonnes performances et une maintenance simple.",
        ogLocale: "fr_FR",
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;

    if (!isLocale(lang)) {
        return {};
    }

    const localeMeta = metadataByLocale[lang];

    return {
        metadataBase: new URL(siteUrl),
        title: {
            default: localeMeta.defaultTitle,
            template: `%s | Zenlabs`,
        },
        description: localeMeta.defaultDescription,
        alternates: {
            canonical: `/${lang}`,
            languages: {
                de: "/de",
                en: "/en",
                fr: "/fr",
            },
        },
        openGraph: {
            title: localeMeta.defaultTitle,
            description: localeMeta.defaultDescription,
            url: `/${lang}`,
            siteName: "Zenlabs",
            locale: localeMeta.ogLocale,
            type: "website",
            images: [
                {
                    url: "/og.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Zenlabs",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: localeMeta.defaultTitle,
            description: localeMeta.defaultDescription,
            images: ["/og.jpg"],
        },
    };
}

const locales = ["de", "en", "fr"] as const;


type TProps = {
    children: ReactNode;
    params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: TProps) {
    const { lang } = await params;

    if (!locales.includes(lang as Locale)) {
        notFound();
    }

    return <>{children}</>;
}