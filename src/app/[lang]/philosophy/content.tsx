import { translate } from "@/utils/translate";
import diamondCSS from "./diamond.module.css";
import { type Locale } from "@/lib/dictionary";

type ContentProps = {
    lang: Locale;
};

export const Content = ({ lang }: ContentProps) => {
    const t = translate({ lang, val: "philosophy" });

    return (
        <section className={diamondCSS.page}>
            <div className={diamondCSS.diamond}>
                <div className={diamondCSS.inner}>

                    <h1 className={diamondCSS.title}>
                        {t("principle1Title")}
                    </h1>

                    <p className={diamondCSS.lead}>
                        {t("principle1Text")}
                    </p>

                    <h1 className={diamondCSS.title}>
                        {t("principle2Title")}
                    </h1>

                    <p className={diamondCSS.lead}>
                        {t("principle2Text")}
                    </p>

                    <h1 className={diamondCSS.title}>
                        {t("principle3Title")}
                    </h1>

                    <p className={diamondCSS.lead}>
                        {t("principle3Text")}
                    </p>

                </div>
            </div>
        </section>
    );
};