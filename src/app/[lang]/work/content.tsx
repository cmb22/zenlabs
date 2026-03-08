// src/app/[lang]/work/content.tsx

import { translate } from "@/utils/translate";
import styles from "./work.module.css";
import { type Locale } from "@/lib/dictionary";
import Image from "next/image";

type ContentProps = {
    lang: Locale;
};

export const Content = async ({ lang }: ContentProps) => {
    const t = translate({ lang, val: "work" });

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <header className={styles.intro}>
                    <h1 className={styles.title}>{t("title")}</h1>

                    <div className={styles.textBlock}>
                        <p className={styles.lead}>{t("lead")}</p>
                    </div>
                </header>

                <div className={styles.rule} />

                <section className={styles.project}>
                    <h2 className={styles.projectTitle}>{t("projectTitle")}</h2>

                    <div className={styles.imageWrap}>
                        <Image
                            src="/architect.png"
                            alt={t("projectTitle")}
                            width={1400}
                            height={900}
                            className={styles.image}
                            priority
                        />
                    </div>

                    <div className={styles.metaRow}>
                        <div className={styles.metaBlock}>
                            <div className={styles.label}>{t("servicesLabel")}</div>
                            <p className={styles.text}>{t("servicesText")}</p>
                        </div>

                        <div className={styles.metaBlock}>
                            <div className={styles.label}>{t("summaryLabel")}</div>
                            <p className={styles.text}>{t("summaryText")}</p>
                        </div>
                    </div>

                    <div className={styles.note}>
                        {t("note")}
                    </div>
                </section>
            </div>
        </section>
    );
};