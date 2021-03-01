import PageHeader from '../components/PageHeader/PageHeader'
import Calendar from '../components/Calendar/Calendar'

export default function Events() {
    return (
        <main>
            <PageHeader title="UPCOMING EVENTS" />
            <p>Check out our calendar of events below!</p>
            <Calendar /> 
        </main>
    )
  }