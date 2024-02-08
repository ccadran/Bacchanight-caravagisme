import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
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
      <div className={styles.start}>
        <Link href="/experience">Démarrer l'éxpérience</Link>
      </div>
      <div className={styles.credits}>
        <Link href="/experience/outro/credits">Crédits</Link>
      </div>
    </main>
  );
}
