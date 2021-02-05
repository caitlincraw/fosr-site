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
                <Link href="/history"><a>Park History</a></Link>
                <Link href="/amenities"><a>Park Amenities</a></Link>
            </FooterNav>
            <FooterNav title="Get Involved">
                <Link href="/volunteer"><a>Become a Volunteer</a></Link>
                <Link href="/contact"><a>Contact Us</a></Link>
            </FooterNav>
        </div>
        <div>
            <FooterNav title="What's Happening">
                <Link href="/news"><a>Park News</a></Link>
                <Link href="/events"><a>Upcoming Events</a></Link>
            </FooterNav>
            <FooterNav title="About Us">
                <Link href="/board"><a>Meet the Board</a></Link>
                <Link href="/partnerships"><a>Park Partnerships</a></Link>
            </FooterNav>
            <FooterNav title="Report a Problem">
                <Link href="/map"><a>Interactive Map</a></Link>
            </FooterNav>
        </div>
    </div>
)

export default FooterNavs