import type { AppProps } from 'next/app'
import { motion } from 'framer-motion';
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div key={router.route} initial='init' animate='anim' variants={{
      init: {
        opacity: 0,
      },
      anim: {
        opacity: 1,
        transition: {
          duration: 0.6
        }
      }
    }}>
        <Component {...pageProps} />
    </motion.div>
  )
}
export default MyApp
