import Header from './Header'
import Footer from './Footer';
import styles from './layout.module.css';

export default function Layout({children}) {
  return (
    <div className={styles.layoutContainer}>
        <Header />
        <div className={styles.mainContainer}>{children}</div>
        <Footer />
    </div>
  )
}