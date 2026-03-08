// src/app/[lang]/philosophy/content.tsx

import { translate } from "@/utils/translate";
import { type Locale } from "@/lib/dictionary";
import { DiamondLayout } from "@/components/DiamondLayout";
import styles from "./content.module.css";

type ContentProps = {
    lang: Locale;
};

export const Content = ({ lang }: ContentProps) => {
    const t = translate({ lang, val: "philosophy" });

    return (
        <DiamondLayout>
            <h2 className={styles.title}>{t("principle1Title")}</h2>
            <p className={styles.lead}>{t("principle1Text")}</p>

            <h2 className={styles.title}>{t("principle2Title")}</h2>
            <p className={styles.lead}>{t("principle2Text")}</p>

            <h2 className={styles.title}>{t("principle3Title")}</h2>
            <p className={styles.lead}>{t("principle3Text")}</p>
        </DiamondLayout>
    );
};