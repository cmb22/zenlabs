import styles from "./philosophy.module.css";
import { Menu } from "@/components/menu";
import { Content } from "./content";
import { isLocale } from "@/lib/dictionary";
import { notFound } from "next/navigation";

type TProps = {
    params: { lang: string };
};
const PhilosophyPage = async ({ params }: TProps) => {
    const { lang } = await params;
    console.log("Philo Received lang:", lang);
    if (!isLocale(lang)) {
        notFound();
    }
    return (
        <section
            className={styles.whiteSection}
        >
            <Menu />
            <Content lang={lang} />
        </section>
    )
}

export default PhilosophyPage;

