import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.footerLinks}>
                    <div className={styles.footerLinksColumn}>
                        <p className={styles.footerLinksTitle}>SECOM</p>
                        <Link className={styles.footerLink} href="/about">About Us</Link>
                    </div>
                    <div className={styles.footerLinksColumn}>
                        <p className={styles.footerLinksTitle}>Products</p>
                        <Link className={styles.footerLink} href="/spdprk">SPDPRK Technology</Link>
                        <Link className={styles.footerLink} href="/software">Software & Reports</Link>
                    </div>
                    <div className={styles.footerLinksColumn}>
                        <p className={styles.footerLinksTitle}>Resources</p>
                        <Link className={styles.footerLink} href="/partners">Partners</Link>
                    </div>
                    <div className={styles.footerLinksColumn}>
                        <p className={styles.footerLinksTitle}>Contact</p>
                        <div className={styles.footerContactInfo}>
                            <p className={styles.footerAddress}>15905 S Broadway</p>
                            <p className={styles.footerAddress}>Gardena, CA 90248</p>
                            <p className={styles.footerAddress}>310-641-1290</p>
                            <p className={styles.footerAddress}>sales@secomintl.com</p>
                        </div>
                    </div>
                </div>
                <p className={styles.footerCopyright}>&copy; Copyright 2023. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
 
export default Footer;