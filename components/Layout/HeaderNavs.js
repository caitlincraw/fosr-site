import styles from './HeaderNavs.module.css'
import Link from 'next/link'

const NavItem = ({ title, children }) => (
    <div className={styles.dropdown}>
        <button className={styles.dropBtn}>{ title }</button>
        <div className={styles.dropContent}>
            { children }
        </div>
    </div>
)

export const HeaderNavs = () => (
    <div className={styles.navsContainer}>
        <NavItem title="About the Park">
            <Link href="/history"><a>History</a></Link>
            <Link href="/amenities"><a>Amenities</a></Link>
            <Link href="/location"><a>Location</a></Link>
        </NavItem>
        <NavItem title="Get Involved">
            <Link href="/volunteer"><a>Volunteer</a></Link>
            <Link href="/contact"><a>Contact Us</a></Link>
        </NavItem>
        <NavItem title="What's Happening">
            <Link href="/news"><a>News</a></Link>
            <Link href="/events"><a>Events</a></Link>
        </NavItem>
        <NavItem title="About Us">
            <Link href="/board"><a>Meet the Board</a></Link>
            <Link href="/partnerships"><a>Partnerships</a></Link>
        </NavItem>
        <NavItem title="Report a Problem">
            <Link href="/map"><a>Interactive Map</a></Link>
        </NavItem>
    </div>
)

export default HeaderNavs