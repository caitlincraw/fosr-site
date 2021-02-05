import styles from './HeaderLogo.module.css'
import Link from 'next/link'

export const HeaderLogo = () => (
    <div className={styles.logoContainer}>
            <Link href="/"><a><img className={styles.logoPic} src="./images/FOSR-logo.jpeg" alt="Friends of Stringer's Ridge logo"></img></a></Link>
            <Link href="/volunteer"><button className={styles.volBtn}>BECOME A VOLUNTEER</button></Link>
    </div>
)

export default HeaderLogo