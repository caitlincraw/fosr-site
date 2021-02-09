import styles from './Form.module.css'

export const Form = () => {

    return (
        <form
            action="https://formspree.io/f/xleovvwk"
            method="POST"
            className={styles.form}
        >
            <label>Name:</label>
            <input type="text" placeholder="Please enter your name" name="name" />
            <label>Email:</label>
            <input type="email" placeholder="Please enter your e-mail" name="email" />
            <label>Message:</label>
            <textarea type="text" placeholder="Please enter your message" name="message" />
            <button className={styles.submitBtn}>Submit</button>
        </form>
    )
}

export default Form