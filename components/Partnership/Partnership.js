import styles from './Partnership.module.css'

export const Partnership = ({ site, logo, alt }) => (
    <div className={ styles.container }>
        <a href={ site } target="_blank" rel="noreferrer"><img className={ styles.logo } src={ logo } alt={ alt }></img></a>
    </div>
)

export default Partnership