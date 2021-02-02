import Link from 'next/link';
import styles from './layout.module.css';


export default function Layout({children}) {
  return (
    <div className={styles.layoutContainer}>
        <nav className={styles.navBar}>
            <div className={styles.topNav}>
                <img className={styles.logoPic} src="./favicon.ico" alt="Friends of Stringer's Ridge logo"></img>
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

        <div className={styles.main}>{children}</div>

        <footer className={styles.footer}>
            <div className={styles.leftFoot}>
                <img src="./favicon.ico" alt="Friends of Stringer's Ridge logo"></img>
                <p>1312 Spears Ave</p>
                <p>Chattanooga, TN</p>
            </div>
            <div className={styles.centerFoot}>
                Copyright &copy; {new Date().getFullYear()} Friends of Stringer's Ridge
            </div>
            <div className={styles.rightFoot}>
                <div className={styles.footNavs}>
                    <h6>About the Park</h6>
                    <button>Park History</button>
                    <button>Park Amenities</button>
                </div>
                <div className={styles.footNavs}>
                    <h6>Get Involved</h6>
                    <button>Become a Volunteer</button>
                    <button>Contact Us</button>
                </div>
                <div className={styles.footNavs}>
                    <h6>What's Happening</h6>
                    <button>Park News</button>
                    <button>Upcoming Events</button>
                </div>
                <div className={styles.footNavs}>
                    <h6>About Us</h6>
                    <button>Meet the Board</button>
                    <button>Park Partnerships</button>
                </div>
                <div className={styles.footNavs}>
                    <h6>Report a Problem</h6>
                    <button>Interactive Map</button>
                </div>
            </div>
        </footer>
    </div>
  )
}