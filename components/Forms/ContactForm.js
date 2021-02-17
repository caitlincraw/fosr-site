import styles from './Forms.module.css'

export const ContactForm = () => {

    return (
        <form action="https://formspree.io/f/xleovvwk" method="POST" className={styles.form}>
            <div className={styles.formItems}>
                <div className={styles.contact}>
                    <label>NAME</label>
                    <input type="text" name="name" />
                    <label>EMAIL</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.message}>
                    <label>MESSAGE</label>
                    <textarea type="text" name="message" />
                </div>
            </div>
            <p className={styles.note}>You can also email us directly at friendsofstringersridge@gmail.com</p>
            <button className={styles.submitBtn}>SEND MESSAGE</button>
        </form>
    )
}

export default ContactForm