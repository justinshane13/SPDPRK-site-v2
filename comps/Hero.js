import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: .5 }}
            >
                <div className={styles.heroText}>
                    <p className={styles.heroTitle}>Parking solutions — done right.</p>
                    <Link className={styles.heroLink} href="/contact">Request a Demo</Link>
                </div>
            </motion.div>
            <div className={styles.heroImageContainer}>
                <Image className={styles.heroImage} src="/welcome.jpg" layout='fill' objectFit='cover' />
            </div>
        </div>
    );
}
 
export default Hero;