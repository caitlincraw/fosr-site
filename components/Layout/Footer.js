import Link from 'next/link';
import styles from './layout.module.css';

const FooterNav = ({ title, children }) => (
    <div className={ styles.footNavs }>
        <h6>{ title }</h6>
        { children }
    </div>
)

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.leftFoot}>
            <Link href="/"><a><img src="./favicon.ico" alt="Friends of Stringer's Ridge logo"></img></a></Link>
            <p>1312 Spears Ave</p>
            <p>Chattanooga, TN</p>
        </div>
        <div className={styles.centerFoot}>
            Copyright &copy; {new Date().getFullYear()} Friends of Stringer's Ridge
        </div>
        <div className={styles.rightFoot}>
            <FooterNav title="About the Park">
                <Link href="/history"><a>Park History</a></Link>
                <Link href="/amenities"><a>Park Amenities</a></Link>
            </FooterNav>
            <FooterNav title="Get Involved">
                <Link href="/volunteer"><a>Become a Volunteer</a></Link>
                <Link href="/contact"><a>Contact Us</a></Link>
            </FooterNav>
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
    </footer>
)

export default Footer
