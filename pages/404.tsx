import Layout from '@components/Layout';
import Link from 'next/link';
import styles from '@styles/404.module.css';

export default function PageNotFound() {
  return (
    <Layout title="Page Not Found">
      <h1>This is the 404 page for now...</h1>
      <Link href="/">
        <a>Want to go back Home?</a>
      </Link>
    </Layout>
  )
}
