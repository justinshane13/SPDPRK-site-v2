import Link from "next/link";
import { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Image from "next/image";

const SectorLink = ({ sector, sectorFull }) => {
    return (
        <div className={styles.sectorLinkContainer}>
            <Link className={styles.sectorLink} href={`/sectors/${sector.toLowerCase()}`}>
                <Image className={styles.sectorLinkIcon} src={`/${sector}.svg`} width={60} height={60} />
                <p className={styles.sectorLinkText}>{sectorFull}</p>
            </Link>
        </div>
    );
}
 
export default SectorLink;