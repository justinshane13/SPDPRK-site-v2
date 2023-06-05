import Background from "./Background";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '@/styles/Home.module.css'

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Background />
            <Navbar />
            { children }
            <div className={styles.custom_shape_divider_bottom_1682005640}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className={styles.shape_fill}></path>
                </svg>
            </div>
            <Footer />
        </div>
    );
}
 
export default Layout