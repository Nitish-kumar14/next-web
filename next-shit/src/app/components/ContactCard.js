import  styles from "@/app/contact/contact.module.css";
import Link from "next/link";

const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="/">  Send Email <span>-&gt;</span></Link>
                    </div>

                    <div className={styles.grid_card}>
                        
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET</p>
                        <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
                        <Link href="/" >  Chat Now <span>-&gt;</span></Link>
                    </div>

                    <div className={styles.grid_card}>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="/" className={styles.anchorLink}>  Ask The Community <span>-&gt;</span></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactCard;