import styles from '@/styles/Software.module.css'
import Head from 'next/head'
import Upgrade from '@/comps/Upgrade';

const Software = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | Software</title>
                <meta name="keywords" content="software" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <div className={styles.software}>
                    <div className={styles.softwareSection1}>
                        <h1>Software & Reports</h1>
                        <div>
                            <div>
                                <h2>Innovation is at the center of who we are.</h2>
                                <p>Our focus is to find creative, yet simple solutions to our customers' problems. Software plays a vital part in reaching that goal.</p>
                                <p>Our software and reporting suite is designed to make your parking operation faster, more efficient, and more profitable. We provide customizable tools for every step of the process. You decide what works best for your operation, and we build it custom for you.</p>
                                <p>When you decide what software and reports you want to add to your operation, you'll have options to add to your brick-and-mortar location and other tools you can manage in the cloud. We'll make sure all your bases are covered, so that you're always in control of what happens at your location.</p>
                            </div>
                            <div className={styles.softwareVideoContainer} dangerouslySetInnerHTML={{ __html: `
                                <video
                                loop
                                muted
                                autoplay
                                playsinline
                                src="/software_mp4.mp4"
                                class="${styles.softwareVideo}"
                                />,
                            ` }}></div>
                        </div>
                    </div>
                    <div className={styles.softwareSection2}>
                        <h2>A tool for every scenario</h2>
                        <p>We've built tools and reports for hundreds of different use cases. If you can imagine it, there's a good chance we've built it.</p>
                        <p>If you need something that is not listed below, don't worry. This list only represents a fraction of what we offer. And if you think the tool you're looking for doesn't exist yet, let us know. Our engineers love to solve new problems.</p>
                        <div className={styles.softwareSection2ListsContainer}>
                            <div className={styles.softwareSection2OnSite}>
                                <h2>On-Site</h2>
                                <div>
                                    <div>
                                        <p>Anti-Passback</p>
                                        <p>Carpool Option</p>
                                        <p>Debit Card Daily Re-Entry</p>
                                        <p>Debit Time Zone Violator</p>
                                        <p>Frequent Parker Programs</p>
                                        <p>Level Occoupancy Count</p>
                                        <p>License Plate Recognition</p>
                                        <p>Limit by House Account</p>
                                        <p>Lot Count Display</p>
                                    </div>
                                    <div>
                                        <p>Lot Full Sign Activator</p>
                                        <p>Nest Violator</p>
                                        <p>Online Validator</p>
                                        <p>Rates at Register</p>
                                        <p>Roving Cashier</p>
                                        <p>Security Levels</p>
                                        <p>Time Debit</p>
                                        <p>Valet Parking</p>
                                        <p>WebVals</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.softwareSection2Cloud}>
                                <h2>Cloud-Based & Remote</h2>
                                <div>
                                    <div>
                                        <p>Automatic Device Disable</p>
                                        <p>Card Summary Report</p>
                                        <p>Central Cashiering</p>
                                        <p>Credit Card Processing</p>
                                        <p>Fail-Soft Software</p>
                                        <p>Home Garage Satellite</p>
                                        <p>Lane Monitoring Report</p>
                                        <p>Machine Readability</p>
                                        <p>Net Admin</p>
                                    </div>
                                    <div>
                                        <p>Outstanding Ticket Report</p>
                                        <p>Positive Posting</p>
                                        <p>Prepay Feature</p>
                                        <p>Programmable Rates</p>
                                        <p>Rates Replay</p>
                                        <p>Remote Shift Report</p>
                                        <p>Revenue Summary Report</p>
                                        <p>Sequence Number Package</p>
                                        <p>Ticket Nesting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Upgrade />
            </main>
        </>
    );
}
 
export default Software;