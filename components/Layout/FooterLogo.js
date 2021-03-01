import styles from './FooterLogo.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export const FooterLogo = () => (
    <div className={styles.logoContainer}>
            <Link href="/"><a><img className={styles.logoPic} src="./images/FOSR-logo.jpeg" alt="Friends of Stringer's Ridge logo"></img></a></Link>
            <p>1312 Spears Ave</p>
            <p>Chattanooga, TN</p>
            <div className={styles.icons}>
                <a href="mailto:friendsofstringersridge@gmail.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="https://www.facebook.com/stringersridge" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
            </div>
    </div>
)

export default FooterLogo