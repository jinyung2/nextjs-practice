import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>

      <nav>
        <Link href='/countries'>
          <a>Search Countries</a>
        </Link>
      </nav>
    </header>
  )
}
