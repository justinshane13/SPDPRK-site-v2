import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import LearnMore from './LearnMore';
import { motion } from 'framer-motion'

const Company = () => {
    return (
        <div className={styles.company}>

            <div className={styles.companyTile}>
                <div className={styles.companyTileImageContainer}>
                    <Image className={styles.companyTileImage} src="/equipment_reader_full.jpg" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.companyTileText}>
                    <p className={styles.companyTileTextTitle}>Local Manufacturing</p>
                    <p className={styles.companyTileTextParagraph}>We're proud to manufacture and develop all of our equipment and software in-house in our Los Angeles, CA headquarters.</p>
                    <LearnMore />
                </div>
            </div>

            <div className={styles.companyTile}>
                <div className={styles.companyTileImageContainer}>
                    <Image className={styles.companyTileImage} src="/mobile_payments.svg" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.companyTileText}>
                    <p className={styles.companyTileTextTitle}>QR Based Payments</p>
                    <p className={styles.companyTileTextParagraph}>Fast, contactless payments have never been simpler because customers connect their ticket to their phone payment method.</p>
                    <LearnMore />
                </div>
            </div>

            <div className={styles.companyTile}>
                <div className={styles.companyTileImageContainer}>
                    <Image className={styles.companyTileImage} src="/corporate_image.jpg" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.companyTileText}>
                    <p className={styles.companyTileTextTitle}>Solutions for Every Sector</p>
                    <p className={styles.companyTileTextParagraph}>We’ve been trusted across numerous sectors over our 45 years in the parking industry.</p>
                    <LearnMore />
                </div>
            </div>

        </div>
    );
}
 
export default Company;