import Link from "next/link";
import styles from "./Langswitcher.module.css";
import type { Locale } from "@/lib/dictionary";

type Props = {
    lang: Locale;
    pathname: string;
};

export const LanguageSwitcher = ({ lang, pathname }: Props) => {
    const strippedPath = pathname.replace(/^\/(de|en|fr)/, "") || "/";

    return (
        <div className={styles.languageSwitch}>
            <Link
                href={`/de${strippedPath}`}
                className={lang === "de" ? styles.active : ""}
            >
                DE
            </Link>
            <span>|</span>
            <Link
                href={`/en${strippedPath}`}
                className={lang === "en" ? styles.active : ""}
            >
                EN
            </Link>
            <span>|</span>
            <Link
                href={`/fr${strippedPath}`}
                className={lang === "fr" ? styles.active : ""}
            >
                FR
            </Link>
        </div>
    );
};