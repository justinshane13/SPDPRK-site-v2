import SectorLink from "./SectorLink";
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'

const SectorsLinks = () => {
    return (
        <div className={styles.sectorsHighlight}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: .5 }}
            >
                <div className={styles.sectorsText}>
                    <p className={styles.sectorsTitle}>Bespoke solutions for every sector</p>
                    <div>
                        <p className={styles.sectorsParagraph}>Every organization offers a unique challenge. Our focus lies in tailoring our equipment and services to cater to the specific requirements of various needs seeking a parking solution.</p>
                        <p className={styles.sectorsParagraph}>Whether you require gated or gateless systems, tickets or ticketless options, cash or cashless, automated or attended we are fully equipped to address your individual needs. As the complexity of a problem increases, so does our engineers' enthusiasm to solve it.</p>
                    </div>
                    <div className={styles.background3}></div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: .5 }}
            >
                <div className={styles.sectorsGrid}>
                    <SectorLink sector="airport" sectorFull="Airport & Off-Airport" />
                    <SectorLink sector="corporate" sectorFull="Corporate Offices & Business Parks" />
                    <SectorLink sector="government" sectorFull="Government & Public Institutions" />
                    <SectorLink sector="hospital" sectorFull="Hospitals" />
                    <SectorLink sector="hotel" sectorFull="Hotels" />
                    <SectorLink sector="residential" sectorFull="Residential Complexes" />
                    <SectorLink sector="restaurant" sectorFull="Restaurants, Bars, Nightclubs, Casinos" />
                    <SectorLink sector="shopping" sectorFull="Shopping Centers & Malls" />
                    <SectorLink sector="sports" sectorFull="Sports Venues & Arenas" />
                </div>
            </motion.div>
        </div>
    );
}
 
export default SectorsLinks;