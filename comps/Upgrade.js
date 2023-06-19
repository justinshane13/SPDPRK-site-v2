import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion'

const Upgrade = () => {
    return (
        <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: .5 }}
        >
            <div className={styles.upgrade}>
                <div className={styles.upgradeText}>
                    <p className={styles.upgradeTitle}>Ready to upgrade?</p>
                    <p className={styles.upgradeParagraph}>Connect with our Solutions team today to schedule a demo.</p>
                    <Link className={styles.companyLink} href="/contact">Contact Us</Link>
                </div>
            </div>
        </motion.div>
    );
}
 
export default Upgrade;