import styles from "./contact.module.css";
import { Menu } from "@/components/menu";
import { Content } from "./content";
import { isLocale } from "@/lib/dictionary";
import { notFound } from "next/navigation";

type TProps = {
    params: { lang: string };
};
const ContactPage = async ({ params }: TProps) => {
    const { lang } = await params;
    // console.log("Received lang:", lang);
    if (!isLocale(lang)) {
        notFound();
    }
    return (
        <section className={styles.whiteSection}>
            <Menu />
            <Content lang={lang} />
        </section>
    )
}

export default ContactPage;

