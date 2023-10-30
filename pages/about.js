import Head from "next/head";
import styles from "@/styles/About.module.css"
import Image from "next/image";
import Upgrade from "@/comps/Upgrade";
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | About</title>
                <meta name="keywords" content="about" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            <main>
                <div className={styles.navbarBackground}></div>
                <div className={styles.about}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: .5 }}
                    >
                        <div className={styles.aboutSection0}>
                            <h1>Quality. Innovation.<br/>& Experience.</h1>
                            <div>
                                <p>Find out what separates us from the rest of the pack.</p>
                                <Image className={styles.greenArrow} src="/green_arrow.svg" width={75} height={75} />
                            </div>
                        </div>
                        <video
                            playsInline
                            autoPlay
                            loop
                            muted
                            style={{ width: '100%'}}
                            src="/HowToSecom.mp4"
                            className={styles.howToVideo}
                        >
                        </video>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: .5 }}
                    >
                        <div className={styles.aboutSection1}>
                            <h1>How are we different?</h1>
                            <div>
                                <p>Welcome to SPDPRK, your trusted Total Solution Provider! We pride ourselves on our commitment to delivering cutting-edge technology that is built to last. With a strong emphasis on Zero Obsolescence, we ensure that both our software and hardware solutions stand the test of time, providing our clients with long-term reliability and value.</p>
                                <p>As a Total Solution Provider, we offer a comprehensive range of services tailored to meet your every need. Whether you're looking for state-of-the-art software development, advanced hardware solutions, or a combination of both, our team of experts is here to deliver innovative and efficient solutions that drive your business forward.</p>
                                <div>
                                    <p>One of our key differentiators is our unwavering dedication to backwards compatibility. We understand the importance of seamless integration with existing systems, and our solutions are designed to work harmoniously with your current infrastructure. By prioritizing compatibility, we minimize disruptions and ensure a smooth transition to our advanced technologies without compromising your existing investments.</p>
                                    <Image className={styles.aboutCorvette} src="/corvette_exit.svg" width={500} height={300} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: .5 }}
                    >
                        <div className={styles.aboutSection2}>
                            <div>
                                <h2>We are focused on creating the highest quality user experience</h2>
                                <p>Customer satisfaction goes beyond delivering exceptional products. Our knowledgeable and experienced support team is readily available to assist you with any technical inquiries, troubleshooting, or guidance you may require.</p>
                                <p>We believe in fostering strong partnerships with our clients, and our internal support ensures that you receive prompt and reliable assistance.</p>
                            </div>
                            <Image className={styles.aboutSectionImage} src="/family.jpg" width={400} height={400} />
                        </div>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: .5 }}
                    >
                        <div className={styles.aboutSection3}>
                            <div className={styles.aboutSectionImageContainer}>
                                <Image className={styles.aboutSectionImage} src="/factory1.jpg" width={400} height={400} />
                            </div>
                            <div className={styles.aboutSection3Text}>
                                <h2>Our equipment must meet a standard of excellence</h2>
                                <p>In addition to our unwavering commitment to quality and support, we take great pride in manufacturing and developing all of our equipment and software in-house, right here in the US headquarters. By maintaining complete control over our production process, we guarantee the highest standards of craftsmanship and reliability in every solution we deliver. Our dedication to domestic manufacturing also enables us to provide efficient turnaround times, ensuring that you receive your customized solutions promptly.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: .5 }}
                    >
                        <div className={styles.aboutSection4}>
                            <h2>You'll get a high-quality product, and peace of mind</h2>
                            <p>Whether you're a small parking operation or a large complex of garages, SPDPRK is here to power you with the latest technology and comprehensive solutions that will drive a successful operation.</p>
                            <p>Experience the difference of working with a company that values longevity, compatibility, support, and domestic manufacturing.</p>
                        </div>
                    </motion.div>
                    <Upgrade />
                </div>
            </main>
        </>
    );
}
 
export default About;