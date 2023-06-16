import styles from '@/styles/Sectors.module.css'
import Banner from '@/comps/Banner';
import SectorsLinks from '@/comps/SectorsLinks';
import Upgrade from '@/comps/Upgrade';
import Head from 'next/head'

const Sectors = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | Sectors</title>
                <meta name="keywords" content="sectors" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <div className={styles.navbarBackground}></div>
                <div className={styles.sectors}>
                    <h1>Sectors</h1>
                    <Banner />
                    <SectorsLinks />
                    <Upgrade />
                </div>
            </main>
        </>
    );
}
 
export default Sectors;