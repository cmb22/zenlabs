// src/components/DiamondLayout.tsx

import { ReactNode } from "react";
import styles from "./DiamondLayout.module.css";

type DiamondLayoutProps = {
    children: ReactNode;
};

export const DiamondLayout = ({ children }: DiamondLayoutProps) => {
    return (
        <section className={styles.page}>
            <div className={styles.diamond}>
                <div className={styles.inner}>{children}</div>
            </div>
        </section>
    );
};