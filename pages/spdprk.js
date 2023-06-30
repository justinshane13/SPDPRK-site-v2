import Upgrade from '@/comps/Upgrade';
import styles from '@/styles/SPDPRK.module.css'
import Image from 'next/image';
import Head from 'next/head'
import { motion} from 'framer-motion'

const SPDPRK = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | SPDPRK</title>
                <meta name="keywords" content="SPDPRK" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <div className={styles.navbarBackground}></div>
                <div className={styles.SPDPRK}>
                    <div className={styles.SPDPRKSection1}>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: .5 }}
                        >
                            <h1 className={styles.underlineBackground}>This is SPDPRK</h1>
                            <p>Your customers can scan their ticket and pay for parking using their phone for every step.</p>
                            <p>Fast, contactless payments have never been simpler because customers connect their ticket to their phone payment method. Quickly allow paying customers to enter and exit your parking facility easily through a QR code ticket dispenser and QR reader. Deep-dive into facility analytics by identifying low and peak volume periods on a hourly, daily, weekly, or monthly basis.</p>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: .5 }}
                        >
                            <div>
                                <div className={styles.SPDPRKSection1Blue}>
                                    <h2>Hardware & Software</h2>
                                    <div>
                                        <div>
                                            <p>SPDPRK systems are designed to be Zero Obsolescent, requiring minimal maintenance and built on a secure and stable technology that is resistant to breakdowns. We utilize a cloud-based monitoring system along with an optional on site server to manage your location with an ethernet connection and power. </p>
                                            <p>We designed the system to be a solution to the variety of challenges parking operations face. By adding SPDPRK to your parking asset, you can drastically reduce the footprint of your equipment. Below are some of the ways it can replace or enhance legacy equipment.</p>
                                        </div>
                                        <Image className={styles.SPDPRKReaderImage} src="/reader_isolated.svg" width={300} height={400} />
                                    </div>
                                </div>
                                <div className={styles.background1}></div>
                                <Image className={styles.greenHalfCircle} src="/green_half_circle.svg" width={50} height={100} />
                            </div>
                        </motion.div>
                    </div>
                    <div className={styles.SPDPRKSection2}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: .5 }}
                    >
                        <h2>Legacy to SPDPRK</h2>
                        <p>After 45 years in the parking industry, we've seen — and built — just about every type of parking equipment you can imagine. While we can still build them, we've also dedicated ourselves to the ongoing development of essential parking equipment.</p>
                        <p>Nevertheless, our ultimate goal is to design SPDPRK to not only replace or enhance existing equipment but to comprehensively transform and optimize every aspect of a parking operation.</p>
                    </motion.div>
                        <div className={styles.SPDPRKSection2ExamplesContainer}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: .5 }}
                            >
                                <div className={styles.SPDPRKSection2Example}>
                                    <div className={styles.SPDPRKSection2ExampleHeader}>
                                        <div className={styles.SPDPRKSection2ExampleImageContainer}>
                                            <Image className={styles.SPDPRKSection2ExampleImage} src="/pay_on_foot2.svg" width={65} height={65} />
                                        </div>
                                        <h3>Pay On Foot System</h3>
                                    </div>
                                    <div className={styles.SPDPRKSection2ExampleText}>
                                        <p>With a pay on foot system, drivers can park their vehicles for a specific duration of time, and then pay the fee before leaving the parking lot. With SPDPRK that is accomplished on your phone.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: .5 }}
                            >
                                <div className={styles.SPDPRKSection2Example}>
                                    <div className={styles.SPDPRKSection2ExampleHeader}>
                                        <div className={styles.SPDPRKSection2ExampleImageContainer}>
                                            <Image className={styles.SPDPRKSection2ExampleImage} src="/parking_ticket.svg" width={60} height={60} />
                                        </div>
                                        <h3>Ticket</h3>
                                    </div>
                                    <div className={styles.SPDPRKSection2ExampleText}>
                                        <p>A bespoke SPDPRK system can be designed to eliminate tickets and of course Ticket Dispensers completely, utilizing alternative forms of credentials for entrance and exit.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: .5 }}
                            >
                                <div className={styles.SPDPRKSection2Example}>
                                    <div className={styles.SPDPRKSection2ExampleHeader}>
                                        <div className={styles.SPDPRKSection2ExampleImageContainer}>
                                            <Image className={styles.SPDPRKSection2ExampleImage} src="/ticket_dispenser.svg" width={70} height={70} />
                                        </div>
                                        <h3>Ticket Dispenser</h3>
                                    </div>
                                    <div className={styles.SPDPRKSection2ExampleText}>
                                        <p>If you require a ticket dispenser, a SPDPRK system will make it faster. It comes standard with a Customer Information Screen, VoIP intercom, push button for tickets, Ticket Printer and is an all stainless steel construction for longevity and strength.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: .5 }}
                            >
                                <div className={styles.SPDPRKSection2Example}>
                                    <div className={styles.SPDPRKSection2ExampleHeader}>
                                        <div className={styles.SPDPRKSection2ExampleImageContainer}>
                                            <Image className={styles.SPDPRKSection2ExampleImage} src="/ticket_scanner.svg" width={60} height={60} />
                                        </div>
                                        <h3>Ticket Acceptor</h3>
                                    </div>
                                    <div className={styles.SPDPRKSection2ExampleText}>
                                        <p>With SPDPRK, once fee has been calculated the driver can pay using a credit or debit card, or mobile payment. If the driver loses their ticket or exceeds the parking time limit, the acceptor may charge a higher fee through the SPDPRK system.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: .5 }}
                            >
                                <div className={styles.SPDPRKSection2Example}>
                                    <div className={styles.SPDPRKSection2ExampleHeader}>
                                        <div className={styles.SPDPRKSection2ExampleImageContainer}>
                                            <Image className={styles.SPDPRKSection2ExampleImage} src="/validation.svg" width={60} height={60} />
                                        </div>
                                        <h3>Validator</h3>
                                    </div>
                                    <div className={styles.SPDPRKSection2ExampleText}>
                                        <p>SPDPRK simplifies validations. They are done on the customer phone or sent by the system automatically to the recipient for entrance or exit. Efficient design with the exact solution to fit your needs.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: .5 }}
                            >
                                <div className={styles.SPDPRKSection2Example}>
                                    <div className={styles.SPDPRKSection2ExampleHeader}>
                                        <div className={styles.SPDPRKSection2ExampleImageContainer}>
                                            <Image className={styles.SPDPRKSection2ExampleImage} src="/card_scanner3.svg" width={55} height={55} />
                                        </div>
                                        <h3>Card Reader</h3>
                                    </div>
                                    <div className={styles.SPDPRKSection2ExampleText}>
                                        <p>SPDPRK can eliminate the need for contractor credentials to License Plate Recognition, biometrics, a customer's own phone via bluetooth, or an automated QR code sent to them.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: .5 }}
                            >
                                <div className={styles.SPDPRKSection2Example}>
                                    <div className={styles.SPDPRKSection2ExampleHeader}>
                                        <div className={styles.SPDPRKSection2ExampleImageContainer}>
                                            <Image className={styles.SPDPRKSection2ExampleImage} src="/cashier.svg" width={60} height={60} />
                                        </div>
                                        <h3>Cashier Terminal</h3>
                                    </div>
                                    <div className={styles.SPDPRKSection2ExampleText}>
                                        <p>SPDPRK can reduce the equipment footprint or human resource allocation of a cashier to those that still see the value in the personal touch of having people dealing with people in the parking process.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: .5 }}
                    >
                        <div className={styles.SPDPRKSection3}>
                            <h2>Highlights of using SPDPRK</h2>
                            <div className={styles.SPDPRKSection3Benefits}>
                                <div>
                                    <Image className={styles.SPDPRKSection3Icon} src="/install.svg" width={60} height={60} />
                                    <p>Fast & easy installation</p>
                                </div>
                                <div>
                                    <Image className={styles.SPDPRKSection3Icon} src="/reduced.svg" width={60} height={60} />
                                    <p>Reduced footprint</p>
                                </div>
                                <div>
                                    <Image className={styles.SPDPRKSection3Icon} src="/payments.svg" width={60} height={60} />
                                    <p>Flexible payment systems</p>
                                </div>
                                <div>
                                    <Image className={styles.SPDPRKSection3Icon} src="/puzzle.svg" width={60} height={60} />
                                    <p>Integrates with existing equipment</p>
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
                        <div className={styles.SPDPRKSection4}>
                            <div className={styles.SPDPRKSection4Text}>
                                <h2>What if I already have equipment installed?</h2>
                                <div>
                                    <p>If you have legacy Secom equipment in your parking garage, it’s fast and straightforward to add SPDPRK technology. It will seamlessly integrate into your existing equipment.</p>
                                    <p>Contact us today to learn how you can make SPDPRK available to your customers.</p>
                                </div>
                            </div>
                            <div className={styles.SPDPRKSection4ImagesContainer}>
                                <div className={styles.SPDPRKSection4Images}>
                                    <div className={styles.SPDPRKSection4ImageContainer}>
                                        <Image className={styles.SPDPRKSection4Image} src="/hardware.jpeg" width={300} height={300} />
                                    </div>
                                    <div className={styles.SPDPRKSection4ImageContainer}>
                                        <Image className={styles.SPDPRKSection4Image} src="/hand_crafted.jpg" width={300} height={300} />
                                    </div>
                                    <div className={styles.SPDPRKSection4ImageContainer}>
                                        <Image className={styles.SPDPRKSection4Image} src="/factory1.jpg" width={300} height={300} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <Upgrade />
                </div>
            </main>
        </>
    );
}
 
export default SPDPRK;