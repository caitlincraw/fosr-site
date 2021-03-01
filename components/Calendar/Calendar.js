import React from 'react'
import styles from './Calendar.module.css'


export const Calendar = () => {
    
    return (
        <div className={styles.container}>
            <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%232c4508&amp;ctz=America%2FNew_York&amp;src=ZnJpZW5kc29mc3RyaW5nZXJzcmlkZ2VAZ21haWwuY29t&amp;color=%23ffffff&amp;showTitle=1&amp;title=FOSR%20Upcoming%20Events&amp;showTabs=0&amp;showCalendars=0&amp;showDate=1&amp;showNav=1" width="90%" height="600" frameBorder="0" scrolling="yes"></iframe>
        </div>
    )
}

export default Calendar