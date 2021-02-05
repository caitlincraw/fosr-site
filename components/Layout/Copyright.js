import styles from './Copyright.module.css'

export const Copyright = () => (
    <div className={ styles.copyright }>
        Copyright &copy; {new Date().getFullYear()} Friends of Stringer's Ridge
    </div>
)

export default Copyright