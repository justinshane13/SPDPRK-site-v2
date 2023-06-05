import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const LearnMore = () => {
    const [isHovered, setIsHovered] = useState(false)

    const trigger = () => {
        setIsHovered(!isHovered)
    }

    return (
        <div className={styles.SPDPRKHighlightLinkContainer}>
            <Link className={styles.SPDPRKHighlightLink}href="/" onMouseEnter={trigger} onMouseLeave={trigger}>Learn More</Link>
            <Image className={`${styles.arrowRight} ${isHovered ? styles.slideRight : ''}`} src="/arrow_right_blue.svg" width={18} height={18} />
        </div>
    );
}
 
export default LearnMore;