import styles from './PageHeader.module.css'

export const PageHeader = ({ title }) => (
    <h1 className={styles.header}>{ title }</h1>
)

export default PageHeader