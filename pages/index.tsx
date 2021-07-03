import Layout from '@components/Layout';
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Hello World!">
      <div className={styles.container}>
          <div className={styles.stairs}>
            {Array(4).fill(null).map((_,i) => <div key={i}></div>)}
            <div>O</div>
            <div></div>
            <div></div>
            <div></div>
            <div>L</div>
            <div className={styles.white}>L</div>
            <div></div>
            <div></div>
            <div>L</div>
            <div className={styles.white}>E</div>
            <div className={styles.white}>V</div>
            <div></div>
            <div>E</div>
            <div className={styles.white}>E</div>
            <div className={styles.white}>L</div>
            <div className={styles.white}>S</div>
            <div>H</div>
            <div className={styles.white}>.</div>
            <div className={styles.white}>F</div>
            <div className={styles.white}>Y</div>
            <div className={styles.white}>I</div>
        </div>
      </div>
    </Layout>
  )
}
