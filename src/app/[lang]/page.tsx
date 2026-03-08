import Image from "next/image";
import styles from "./page.module.css";
import { Menu } from "@/components/menu";
import { Content as ServicesContent } from "./services/content";
import { type Locale } from "@/lib/dictionary";
import { translate } from "@/utils/translate";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params as { lang: Locale };
  const t = translate({ lang, val: "home" });
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            className={styles.heroLogo}
            src="/logo_white.png"
            alt="Zenlabs Web Development"
            width={200}
            height={150}
            priority
          />

          <p className={styles.quote}>
            {t("title")}
          </p>
        </div>
      </section>

      <section className={styles.whiteSection}>
        <Menu />
        <ServicesContent lang={lang} />
      </section>
    </div>
  );
}