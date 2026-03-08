import { Content } from "./content";
import styles from "./services.module.css";
import { Menu } from "@/components/menu";
import { isLocale } from "@/lib/dictionary";
import { notFound } from "next/navigation";

type TProps = {
    params: { lang: string };
};

const Services = async ({ params }: TProps) => {
    const { lang } = await params;
    if (!isLocale(lang)) {
        notFound();
    }

    return (
        <section className={styles.whiteSection}>
            <Menu />
            <Content lang={lang} />
        </section>
    );
}
export default Services;