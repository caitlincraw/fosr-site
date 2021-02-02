import Link from 'next/link';
import styles from './layout.module.css';


export default function Layout({children}) {
  return (
    <div className={styles.layoutContainer}>
        <nav className={styles.navBar}>
            <div className={styles.topNav}>
                <Link href="/"><a><img className={styles.logoPic} src="./favicon.ico" alt="Friends of Stringer's Ridge logo"></img></a></Link>
                <button className={styles.volBtn}>BECOME A VOLUNTEER</button>
            </div>
            <div className={styles.bottomNav}>
                <button>About the Park</button>
                <button>Get Involved</button>
                <button>What's Happening</button>
                <button>About Us</button>
                <button>Report a Problem</button>
            </div>
        </nav>

        <main>{children}</main>

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
                    <a>Park History</a>
                    <a>Park Amenities</a>
                </div>
                <div className={styles.footNavs}>
                    <h6>Get Involved</h6>
                    <a>Become a Volunteer</a>
                    <a>Contact Us</a>
                </div>
                <div className={styles.footNavs}>
                    <h6>What's Happening</h6>
                    <a>Park News</a>
                    <a>Upcoming Events</a>
                </div>
                <div className={styles.footNavs}>
                    <h6>About Us</h6>
                    <a>Meet the Board</a>
                    <a>Park Partnerships</a>
                </div>
                <div className={styles.footNavs}>
                    <h6>Report a Problem</h6>
                    <a>Interactive Map</a>
                </div>
            </div>
        </footer>
    </div>
  )
}