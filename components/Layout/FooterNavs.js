import Link from 'next/link'
import styles from './FooterNavs.module.css'

const FooterNav = ({ title, children }) => (
    <div className={ styles.navGroup }>
        <h6>{ title }</h6>
        { children }
    </div>
)

export const FooterNavs = () => (
    <div className={styles.navsContainer}>
        <div>
            <FooterNav title="About the Park">
                <Link href="/history"><a>History</a></Link>
                <Link href="/amenities"><a>Amenities</a></Link>
                <Link href="/location"><a>Location</a></Link>
            </FooterNav>
            <FooterNav title="Get Involved">
                <Link href="/volunteer"><a>Volunteer</a></Link>
                <Link href="/contact"><a>Contact Us</a></Link>
            </FooterNav>
        </div>
        <div>
            <FooterNav title="What's Happening">
                <Link href="/news"><a>News</a></Link>
                <Link href="/events"><a>Events</a></Link>
            </FooterNav>
            <FooterNav title="About Us">
                <Link href="/board"><a>Meet the Board</a></Link>
                <Link href="/partnerships"><a>Partnerships</a></Link>
            </FooterNav>
            <FooterNav title="Report a Problem">
                <Link href="/map"><a>Interactive Map</a></Link>
            </FooterNav>
        </div>
    </div>
)

export default FooterNavs