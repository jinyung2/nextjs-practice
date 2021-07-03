import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { ImHome, ImEarth } from 'react-icons/im';
import { useRouter } from 'next/router';

export default function Header({children}: {children: any}) {
  const router = useRouter();
  return (
    <div className={styles.navigate}>
      {router.route === "/countries" && <nav>
        <Link href='/'>
          <a><ImHome/></a>
        </Link>
      </nav>}
      <>{children}</>
      {router.route === "/" && <nav>
        <Link href='/countries'>
          <a><ImEarth/></a>
        </Link>
      </nav>}
    </div>
  )
}
