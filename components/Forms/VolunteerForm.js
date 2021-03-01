import styles from './Forms.module.css'
import { useState } from 'react'
import axios from 'axios'

export const VolunteerForm = () => {
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
                <div className={styles.checkbox}>
                    <p>Please select all volunteer work that interests you!</p>
                    <input type="checkbox" id="vol1" name="vol1" value="physical" />
                    <label htmlFor="vol11"> PHYSICAL WORK AND CONSERVATION </label>
                    <br />
                    <input type="checkbox" id="vol2" name="vol2" value="events" />
                    <label htmlFor="vol2"> FUNDRAISING AND EVENT PLANNING </label>
                    <br />
                    <input type="checkbox" id="vol3" name="vol3" value="outreach" />
                    <label htmlFor="vol3"> EDUCATION AND OUTREACH </label>
                    <br />
                    <input type="checkbox" id="vol4" name="vol4" value="anything" />
                    <label htmlFor="vol4"> ANYTHING WE MAY NEED HELP WITH IN THE FUTURE! </label>
                </div>
            </div>
            <p className={styles.note}>By pressing submit, you agree to be contacted by Friends of Stringer's Ridge when volunteer work is needed.</p>
            {status === "SUCCESS" ? <p>Thanks for expressing interest in volunteering. We have added you to our volunteer database and will reach out when help is needed!</p> : <button className={styles.submitBtn}>SEND MESSAGE</button>}
            {status === "ERROR" && <p>Oh no, there was an error when submitting. Please refresh the page and try again!</p>}
        </form>
    )
}

export default VolunteerForm