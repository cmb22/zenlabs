import { translate } from "@/utils/translate";
import styles from "./work.module.css";
import { type Locale } from "@/lib/dictionary";
import Image from "next/image";

type ContentProps = {
    lang: Locale;
};

export const Content = async ({ lang }: ContentProps) => {
    const t = translate({ lang, val: "work" });

    const projects = [
        {
            title: t("project1Title"),
            imageSrc: "/architect.png",
            imageAlt: t("project1Title"),
            servicesLabel: t("servicesLabel"),
            servicesText: t("project1ServicesText"),
            summaryLabel: t("summaryLabel"),
            summaryText: t("project1SummaryText"),
            note: t("project1Note")
        },
        {
            title: t("project2Title"),
            imageSrc: "/chrismblyth.png",
            imageAlt: t("project2Title"),
            servicesLabel: t("servicesLabel"),
            servicesText: t("project2ServicesText"),
            summaryLabel: t("summaryLabel"),
            summaryText: t("project2SummaryText"),
            note: t("project2Note")
        }
    ];

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

                <div className={styles.projects}>
                    {projects.map((project, index) => (
                        <section key={project.title} className={styles.project}>
                            {index > 0 && <div className={styles.projectDivider} />}

                            <h2 className={styles.projectTitle}>{project.title}</h2>

                            <div className={styles.imageWrap}>
                                <Image
                                    src={project.imageSrc}
                                    alt={project.imageAlt}
                                    width={1400}
                                    height={900}
                                    className={styles.image}
                                    priority={index === 0}
                                />
                            </div>

                            <div className={styles.metaRow}>
                                <div className={styles.metaBlock}>
                                    <div className={styles.label}>{project.servicesLabel}</div>
                                    <p className={styles.text}>{project.servicesText}</p>
                                </div>

                                <div className={styles.metaBlock}>
                                    <div className={styles.label}>{project.summaryLabel}</div>
                                    <p className={styles.text}>{project.summaryText}</p>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Content;