import Image from "next/image";
import styles from "./page.module.css";
import { Menu } from "@/components/menu";
import { Content as ServicesContent } from "./services/content";
import { type Locale } from "@/lib/dictionary";

export default async function Home({ params }: { params: { lang: string } }) {
  console.log("Received params:", await params);
  const { lang } = await params as { lang: Locale };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            className={styles.heroLogo}
            src="/logo_white.png"
            alt="Zenlabs"
            width={200}
            height={150}
            priority
          />

          <p className={styles.quote}>
            Moderne Websites für Unternehmen und Selbständige
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