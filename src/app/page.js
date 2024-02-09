import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Layout from "./layout";
import Button from "./components/Button/button"; // Import correct

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.phone}>
          <img src="/images/3D-phone.png" alt="" />
        </div>
        <div className={styles.intro}>
          <p>
            Des tableaux sont en danger. Un voyageur dans le temps vous investis
            d’une grande mission, l’avenir est entre vos mains.
          </p>
        </div>
        <Button text="Démarrer l'éxpérience" link="/experience" />
        <div className={styles.credits}>
          <Link href="/experience/outro/credits">Crédits</Link>
        </div>
      </main>
    </Layout>
  );
}
