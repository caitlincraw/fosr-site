import Link from 'next/link';
import styles from './layout.module.css'
import HeaderLogo from './HeaderLogo'
import HeaderNavs from './HeaderNavs'

export const Header = () => (
    <nav className={styles.navBar}>
        <HeaderLogo />
        <HeaderNavs />
    </nav>
)

export default Header
