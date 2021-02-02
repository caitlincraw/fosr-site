import Link from 'next/link';
import styles from './layout.module.css';


export default function Layout({children}) {
  return (
    <div className={styles.layoutContainer}>
        <nav className={styles.navBar}>
            <div className={styles.topNav}>
                <Link href="/"><a><img className={styles.logoPic} src="./favicon.ico" alt="Friends of Stringer's Ridge logo"></img></a></Link>
                <Link href="/volunteer"><button className={styles.volBtn}>BECOME A VOLUNTEER</button></Link>
            </div>
            <div className={styles.bottomNav}>
                <button>About the Park</button>
                <button>Get Involved</button>
                <button>What's Happening</button>
                <button>About Us</button>
                <button>Report a Problem</button>
            </div>
        </nav>

        <div className={styles.mainContainer}>{children}</div>

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
                <div className={styles.footNavs}>
                    <h6>About the Park</h6>
                    <Link href="/history"><a>Park History</a></Link>
                    <Link href="/amenities"><a>Park Amenities</a></Link>
                </div>
                <div className={styles.footNavs}>
                    <h6>Get Involved</h6>
                    <Link href="/volunteer"><a>Become a Volunteer</a></Link>
                    <Link href="/contact"><a>Contact Us</a></Link>
                </div>
                <div className={styles.footNavs}>
                    <h6>What's Happening</h6>
                    <Link href="/news"><a>Park News</a></Link>
                    <Link href="/events"><a>Upcoming Events</a></Link>
                </div>
                <div className={styles.footNavs}>
                    <h6>About Us</h6>
                    <Link href="/board"><a>Meet the Board</a></Link>
                    <Link href="/partnerships"><a>Park Partnerships</a></Link>
                </div>
                <div className={styles.footNavs}>
                    <h6>Report a Problem</h6>
                    <Link href="/map"><a>Interactive Map</a></Link>
                </div>
            </div>
        </footer>
    </div>
  )
}