import styles from '@styles//NotFound.module.css';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image src="/pusheen-laptop.png" height="200" width="300"/>
      <div>Hmm... Could not find anything. Try Again?</div> 
    </div>
  )
}
