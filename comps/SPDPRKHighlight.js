import styles from '@/styles/Home.module.css'
import LearnMore from './LearnMore';
import Image from 'next/image';
import { motion } from 'framer-motion'

const SPDPRKHighlight = () => {
    return (
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: .5 }}
      >
        <div className={styles.SPDPRKHighlight}>
          <div className={styles.SPDPRKHighlightText}>
            <div className={styles.SPDPRKUnderlineContainer}>
              <p className={`${styles.SPDPRKHighlightTitle} ${styles.underlineBackground}`}>With SPDPRK, we make it simple.</p>
            </div>
          </div>

        </div>
      </motion.div>
    );
}
 
export default SPDPRKHighlight;