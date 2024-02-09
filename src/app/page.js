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
            Dans un futur où le numérique a remplacé les arts d'antan, un
            professeur rebelle parvient à vous contacter pour faire revivre
            d’anciennes techniques disparues.
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
