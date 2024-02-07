import styles from './layout.module.scss';

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
        <div className={styles.traveler}>
          <div className={styles.scientifique}>
            <div className={styles.imgContainer}>
              <img src="/images/Scientidtgreen.png" alt="" />
            </div>
            <div className={styles.travelerVoice}>
              <h4>Scientifique</h4>
              <div className={styles.imgContainer2}>
                <img src="/images/songLottie.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src="/images/lottie.png" alt="" />
          </div>
        </div>
      </div>

      {children}
    </main>
  );
}
