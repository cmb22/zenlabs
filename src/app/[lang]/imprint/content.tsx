// src/app/[lang]/imprint/content.tsx

import { translate } from "@/utils/translate";
import { type Locale } from "@/lib/dictionary";
import styles from "./Imprint.module.css";

type ContentProps = {
    lang: Locale;
};

export const Content = ({ lang }: ContentProps) => {
    const t = translate({ lang, val: "imprint" });

    return (
        <div className={styles.content}>
            <div className={styles.contentInner}>
                <h1 className={styles.title}>{t("title")}</h1>

                <p className={styles.text}>
                    {t("name")}<br />
                    {t("street")}<br />
                    {t("city")}
                </p>

                <p className={styles.text}>
                    {t("phoneLabel")}: +49 151 686 34 515<br />
                    {t("emailLabel")}: letstalk@zen-labs.de
                </p>

                <p className={styles.text}>
                    {t("taxLabel")}: 14 / 232 / 00680
                </p>

                <h2 className={styles.subtitle}>{t("liabilityContentTitle")}</h2>
                <p className={styles.text}>{t("liabilityContentText")}</p>

                <h2 className={styles.subtitle}>{t("liabilityLinksTitle")}</h2>
                <p className={styles.text}>{t("liabilityLinksText")}</p>

                <h2 className={styles.subtitle}>{t("copyrightTitle")}</h2>
                <p className={styles.text}>{t("copyrightText")}</p>
            </div>
        </div>
    );
};