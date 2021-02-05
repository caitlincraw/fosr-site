import styles from './layout.module.css'
import Copyright from './Copyright'
import FooterLogo from './FooterLogo'
import FooterNavs from './FooterNavs'

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.topFooter}>
            <FooterLogo />
            <FooterNavs />
        </div>
        <Copyright />
    </footer>
)

export default Footer
