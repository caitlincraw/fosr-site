import styles from './Forms.module.css'
import { useState } from 'react'
import axios from 'axios'

export const ContactForm = () => {
    const [status, setStatus] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        axios({
            url: 'https://formspree.io/f/xleovvwk',
            method: 'POST',
            headers: {
              'Accept': 'application/json'
            },
            data: data
        })
        .then(() => { 
            setStatus("SUCCESS")
            form.reset()
        })
        .catch(() => {
            setStatus("ERROR")
        })

    }

    return (
        <form action="https://formspree.io/f/xleovvwk" method="POST" className={styles.form} onSubmit={handleSubmit}>
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
            <p className={styles.note}>You can also email us directly at <a href="mailto:friendsofstringersridge@gmail.com" target="_blank" rel="noreferrer">friendsofstringersridge@gmail.com</a>!</p>
            {status === "SUCCESS" ? <p>Thanks for your message, we will get back to you as soon as we can!</p> : <button className={styles.submitBtn}>SEND MESSAGE</button>}
            {status === "ERROR" && <p>Oh no, there was an error when submitting. Please refresh the page and try again!</p>}
        </form>
    )
}

export default ContactForm