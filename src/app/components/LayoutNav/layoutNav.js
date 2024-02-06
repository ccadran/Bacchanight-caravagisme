import styles from "./layoutNav.module.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <main className={styles.main}>
      <div className={styles.infosContainer}>
        <div className={styles.navContainer}>
          <h4>signal faible</h4>
          <div className={styles.controller}>
            <p>Batterie</p>
            <p className={styles.volume}>volume</p>
          </div>
        </div>
      </div>

      {children}
    </main>
  );
}