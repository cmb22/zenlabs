import styles from "./content.module.css";
import { type Locale } from "@/lib/dictionary";
import { translate } from "@/utils/translate";

type ContentProps = {
    lang: Locale;
};

export const Content = ({ lang = "de" }: ContentProps) => {
    const t = translate({ lang, val: "services" });

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <header className={styles.intro}>
                    <h1 className={styles.mainTitle}>{t("title")}</h1>
                    <div className={styles.textBlock}>
                        <p className={styles.lead}>{t("lead")}</p>
                    </div>
                </header>

                <div className={styles.rule} />

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>{t("businessWebsitesTitle")}</h2>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>{t("businessWebsitesText")}</p>
                    </div>
                </section>

                <div className={styles.rule} />

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>{t("cmsTitle")}</h2>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>{t("cmsText")}</p>
                    </div>
                </section>

                <div className={styles.rule} />

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>{t("relaunchTitle")}</h2>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>{t("relaunchText")}</p>
                    </div>
                </section>

                <div className={styles.rule} />

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>{t("processTitle")}</h2>
                    <div className={styles.textBlock}>
                        <div className={styles.processList}>
                            <div className={styles.processItem}>
                                <div className={styles.processNumber}>1</div>
                                <div className={styles.processContent}>
                                    <h3 className={styles.processTitle}>{t("step1Title")}</h3>
                                    <p className={styles.processText}>{t("step1Text")}</p>
                                </div>
                            </div>

                            <div className={styles.processItem}>
                                <div className={styles.processNumber}>2</div>
                                <div className={styles.processContent}>
                                    <h3 className={styles.processTitle}>{t("step2Title")}</h3>
                                    <p className={styles.processText}>{t("step2Text")}</p>
                                </div>
                            </div>

                            <div className={styles.processItem}>
                                <div className={styles.processNumber}>3</div>
                                <div className={styles.processContent}>
                                    <h3 className={styles.processTitle}>{t("step3Title")}</h3>
                                    <p className={styles.processText}>{t("step3Text")}</p>
                                </div>
                            </div>

                            <div className={styles.processItem}>
                                <div className={styles.processNumber}>4</div>
                                <div className={styles.processContent}>
                                    <h3 className={styles.processTitle}>{t("step4Title")}</h3>
                                    <p className={styles.processText}>{t("step4Text")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};