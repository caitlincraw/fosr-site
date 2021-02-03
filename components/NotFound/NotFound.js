import styles from './NotFound.module.css'

export const NotFound = () => (
    <main className={ styles.container }>
        <h1>404 - Page Not Found</h1>
        <p>Did you get lost on Gig City again?</p>
        <img className={ styles.gigcity } src="images/gig-city.jpg" alt="Gig City trailhead" />
    </main>
)

export default NotFound
