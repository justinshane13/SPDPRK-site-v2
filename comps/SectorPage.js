import styles from '@/styles/SectorPage.module.css'
import Image from 'next/image';
import Upgrade from './Upgrade';

const SectorPage = ({ name, description, image, characteristics }) => {
    return (
        <main>
            <div className={styles.navbarBackground}></div>
            <div className={styles.sectorPage}>
                <div className={styles.sectorPageSection1}>
                    <h1>{name}</h1>
                    <div>
                        <div>
                            {description.map(p => <p className={styles.sectorParagraph}>{p}</p>)}
                        </div>
                        <Image className={styles.sectorPageSection1Image} src={image} width={500} height={500} />
                    </div>
                </div>
                <div className={styles.sectorPageSection2}>
                    <p>{name}</p>
                    <h2>Key Characteristics</h2>
                    <div>
                        {characteristics.map(c => {
                            return (
                                <div className={styles.sectorPageSection2Tile}>
                                    <div>
                                        <Image className={styles.sectorPageIcon} src={c.image} width={50} height={50} />
                                    </div>
                                    <p>{c.text}</p>
                                </div>
                            )
                            })}
                    </div>
                </div>
                <Upgrade />
            </div>
        </main>
    );
}

export default SectorPage;