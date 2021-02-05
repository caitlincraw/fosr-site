import styles from './FooterLogo.module.css'
import Link from 'next/link'

export const FooterLogo = () => (
    <div className={styles.logoContainer}>
            <Link href="/"><a><img src="./images/FOSR-logo.jpeg" alt="Friends of Stringer's Ridge logo"></img></a></Link>
            <p>1312 Spears Ave</p>
            <p>Chattanooga, TN</p>
    </div>
)

export default FooterLogo