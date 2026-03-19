import { Content } from "./content";
import styles from "./Imprint.module.css";
import { Menu } from "@/components/menu";
import { isLocale } from "@/lib/dictionary";
import { notFound } from "next/navigation";

type TProps = {
    params: Promise<{ lang: string }>;
};

const Imprint = async ({ params }: TProps) => {
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
};

export default Imprint;