import styles from '@/styles/Contact.module.css'
import Head from 'next/head'

const Contact = () => {
    return (
        <>
            <Head>
                <title>SPDPRK | Contact</title>
                <meta name="keywords" content="contact" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <div className={styles.navbarBackground}></div>
                <div className={styles.contact}>
                    <div className={styles.contactSection1}>
                        <h1>Contact Us</h1>
                        <div>
                            <div>
                                <h2>Visit</h2>
                                <p>15905 S Broadway</p>
                                <p>Gardena, CA 90248</p>
                            </div>
                            <div>
                                <h2>Call</h2>
                                <p>210-4-SPDPRK</p>
                            </div>
                            <div>
                                <h2>Email</h2>
                                <p>sales@secomintl.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactSection2}>
                        <h2>Contact form</h2>
                        <div>
                            <div>
                                <p>We are available to answer your questions, set up a demo, or explain how our products work in more detail. Just leave us your name, email, and message using this form.</p>
                                <p>We read every message and will respond to you as soon as we can.</p>
                            </div>
                            <form action="https://formsubmit.co/jsthomas13@yahoo.com" method="POST">
                                <input className={styles.contactSection2Name} type="text" name="name" placeholder="Name" required />
                                <input className={styles.contactSection2Email} type="email" name="email" placeholder="Email" required />
                                <textarea className={styles.contactSection2Message} type="text" name="message" placeholder="Type your message here" required />
                                <button className={styles.contactSection2Send} type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Contact;