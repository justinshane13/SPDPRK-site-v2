import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <nav className={styles.navbar}>
            <Link className={styles.navLogoLink} href="/"><Image className={styles.navLogo} src="/SPDPRK_logo_white.svg" width={106} height={31} /></Link>
            <Image className={`${styles.hamburgerButton} ${isExpanded ? styles.hamburgerButtonRotated : ''}`} src="/hamburger_white.svg" width={30} height={30} onClick={handleClick} />
            <div className={`${styles.navbarCollapsible} ${isExpanded ? styles.expanded : ''}`}>
                <div className={styles.navLinksCollapsible}>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/about"><span className={styles.navLinkContent}>About</span></Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/spdprk"><span className={styles.navLinkContent}>SPDPRK</span></Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/software"><span className={styles.navLinkContent}>Software & Reports</span></Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/sectors"><span className={styles.navLinkContent}>Sectors</span></Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/partners"><span className={styles.navLinkContent}>Partners</span></Link>
                    <Link className={styles.navLinkCollapsible} onClick={handleClick} href="/contact"><span className={styles.navLinkContent}>Contact</span></Link>
                </div>
            </div>
            <div className={styles.navLinks}>
                <Link className={styles.navLink} href="/about">About</Link>
                <Link className={styles.navLink} href="/spdprk">SPDPRK</Link>
                <Link className={styles.navLink} href="/software">Software & Reports</Link>
                <Link className={styles.navLink} href="/sectors">Sectors</Link>
                <Link className={styles.navLink} href="/partners">Partners</Link>
                <Link className={styles.navLink} href="/contact">Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar