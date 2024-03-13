import { Helmet } from 'react-helmet'
import './index.scss'
import EventForm from './EventForm'

const CustomSchedule = () => {
    return (
        <div>
            <Helmet>
                <title>Custom Schedule</title>
            </Helmet>

            <h2> (BETA) Your personal schedule</h2>
            <p>Select or add a new schedule of your own to make the course selection process easier. <br />             
            These schedules are only visible to you, and if you clear your browser cache, it will disappear.</p>

            <div className="event-form">
                <EventForm />
            </div>
        </div>
    )
}

export default CustomSchedule