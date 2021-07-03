import Layout from '@components/Layout';
import Link from 'next/link';
import { FaQuestion } from'react-icons/fa';
import styles from '@styles/404.module.css';

export default function PageNotFound() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.container}>
        <h1 style={{fontSize: "4rem", margin: "5% 0"}}>404: Page Not Found</h1>
        <FaQuestion style={{fontSize: "20rem"}}/>
        <Link href="/">
          <a>Click Me To Go Home!</a>
        </Link>
      </div>
    </Layout>
  )
}
