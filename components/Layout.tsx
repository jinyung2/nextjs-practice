import Head from 'next/head';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import { LayoutTypes } from 'types/Layout';

export default function Layout({
  title,
  keywords,
  description,
  children
}: LayoutTypes) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header>
        <div className={styles.container}>
          {children}
        </div>
      </Header>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Hello World!',
  description: 'Search for a country of your choice',
  keywords: 'country, hello, world, countries, search, levels'
}