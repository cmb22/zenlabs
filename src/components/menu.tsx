// src/components/menu.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menu.module.css";
import { LanguageSwitcher } from "./Langswitcher";
import { translate } from "@/utils/translate";

export const Menu = () => {
    const pathname = usePathname();
    const segments = pathname.split("/");
    const lang = segments[1] || "de";
    const t = translate({ lang, val: "navigation" });

    const isActive = (path: string) => pathname.startsWith(`/${lang}${path}`);

    return (
        <div className={styles.menuWrap}>
            <LanguageSwitcher lang={lang} pathname={pathname} />

            <div className={styles.menuInner}>
                <Link href={`/${lang}`}>
                    <Image
                        className={styles.menuLogo}
                        src="/logo_black.png"
                        alt="Zenlabs"
                        width={100}
                        height={70}
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link
                        href={`/${lang}/services`}
                        className={isActive("/services") ? styles.active : ""}
                    >
                        {t("services")}
                    </Link>

                    <Link
                        href={`/${lang}/work`}
                        className={isActive("/work") ? styles.active : ""}
                    >
                        {t("work")}
                    </Link>

                    <Link
                        href={`/${lang}/philosophy`}
                        className={isActive("/philosophy") ? styles.active : ""}
                    >
                        {t("philosophy")}
                    </Link>

                    <Link
                        href={`/${lang}/contact`}
                        className={isActive("/contact") ? styles.active : ""}
                    >
                        {t("contact")}
                    </Link>
                </nav>
            </div>
        </div>
    );
};