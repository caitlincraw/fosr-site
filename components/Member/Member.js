import styles from './Member.module.css'

export const Member = ({ headshot, title, name, bio }) => (
    <div className={ styles.container }>
        <img className={ styles.headshot } src={ headshot }></img>
        <h3>{ title }</h3>
        <h3>{ name }</h3>
        <p>{ bio }</p>
    </div>
)

export default Member