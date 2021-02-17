import styles from './Forms.module.css'

export const VolunteerForm = () => {

    return (
        <form action="https://formspree.io/f/xleovvwk" method="POST" className={styles.form}>
            <div className={styles.formItems}>
                <div className={styles.contact}>
                    <label>NAME</label>
                    <input type="text" name="name" />
                    <label>EMAIL</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.checkbox}>
                    <p>Please select all Volunteer Work that interests you!</p>
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
            <button className={styles.submitBtn}>SUBMIT</button>
        </form>
    )
}

export default VolunteerForm