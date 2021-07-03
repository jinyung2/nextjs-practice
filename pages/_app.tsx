import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
  <motion.div key={router.route} initial='init' animate='anim' variants={{
    init: {
      opacity: 0,
    },
    anim: {
      opacity: 1,
      transition: {
        delay: 0.5
      }
    }
  }}>
    <Component {...pageProps} />
  </motion.div>
  )
}
export default MyApp
