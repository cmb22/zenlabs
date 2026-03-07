// src/app/[lang]/contact/content.tsx

import { translate } from "@/utils/translate";
import styles from "./contact.module.css";
import diamondCSS from "./diamond.module.css";
import { type Locale } from "@/lib/dictionary";

type ContentProps = {
    lang: Locale;
};

export const Content = ({ lang }: ContentProps) => {
    const t = translate({ lang, val: "contact" });
    const diamond = true;
    if (diamond) {
        return (
            <section className={diamondCSS.page}>
                <div className={diamondCSS.diamond}>
                    <div className={diamondCSS.inner}>
                        <h1 className={diamondCSS.title}>{t("title")}</h1>

                        <p className={diamondCSS.lead}>{t("lead")}</p>

                        <a
                            className={diamondCSS.email}
                            href="mailto:letstalk@zenlabs.ch"
                        >
                            letstalk@zenlabs.ch
                        </a>

                        <a
                            className={diamondCSS.phone}
                            href="tel:+4915168634515"
                        >
                            +49 151 686 34 515
                        </a>
                    </div>
                </div>
            </section>
        )
    }
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

                <div className={styles.contactGrid}>
                    <div className={styles.item}>
                        <div className={styles.label}>{t("email")}</div>
                        <div className={styles.textBlock}>
                            <a
                                className={styles.primaryLink}
                                href="mailto:hello@zenlabs.ch"
                            >
                                hello@zenlabs.ch
                            </a>
                        </div>
                    </div>

                    <div className={styles.rule} />

                    <div className={styles.item}>
                        <div className={styles.label}>{t("phone")}</div>
                        <div className={styles.textBlock}>
                            <a
                                className={styles.link}
                                href="tel:+4915168634515"
                            >
                                +49 151 686 34 515
                            </a>
                        </div>
                    </div>

                    <div className={styles.rule} />

                    <div className={styles.item}>
                        <div className={styles.label}>{t("location")}</div>
                        <div className={styles.textBlock}>
                            <p className={styles.text}>
                                {t("locationLine1")}
                                <br />
                                {t("locationLine2")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.diamond} />
        </section>
    );
};