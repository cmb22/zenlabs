// src/app/[lang]/contact/content.tsx

import { translate } from "@/utils/translate";
import { type Locale } from "@/lib/dictionary";
import { DiamondLayout } from "@/components/DiamondLayout";
import styles from "./content.module.css";

type ContentProps = {
    lang: Locale;
};

export const Content = ({ lang }: ContentProps) => {
    const t = translate({ lang, val: "contact" });

    return (
        <DiamondLayout>
            <h1 className={styles.title}>{t("title")}</h1>

            <p className={styles.lead}>{t("lead")}</p>

            <a className={styles.email} href="mailto:letstalk@zen-labs.de">
                letstalk@zen-labs.de
            </a>

            <a className={styles.phone} href="tel:+4915168634515">
                +49 151 686 34 515
            </a>
        </DiamondLayout>
    );
};