import { useState } from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import Select from "react-select"
import { selectCurrentTerm } from "../../store/selectors"
import { getRandomColor } from "../../utils/colors"
import Calendar from "../Schedule/Calendar"

const standardizeRoom = (s) => !s ? '' : s
    .split('')
    .filter((char, index) => {
        if (char == ' ') {
            if (index > 0 && s[index-1] == '&') return false
            if (index < s.length - 1 && s[index+1] == '&') return false
        }
        return !(char == 's' && s.slice(0, 10) == 'Classrooms');
    })
    .join('')

const Rooms = () => {
    const [room, setRoom] = useState(null)
    const allCourses = useSelector(selectCurrentTerm)

    const selectedCourses = !room ? [] : allCourses
        .filter(course => standardizeRoom(course.location) == room.value)
        .map(course => ({...course, visible: true, color: getRandomColor()}))
    const onlyUnique = (value, index, array) => array.indexOf(value) === index
    const roomList = allCourses
        .map(course => standardizeRoom(course.location))
        .filter(onlyUnique)
        .filter(room => room)
        .map(room => ({label: room, value: room}))
        .sort((a, b) => a.label.localeCompare(b.label))

    return (
        <div className='row w-100 m-0'>
            <Helmet>
                <title>OneSchedule</title>
            </Helmet>

            {/* CALENDAR  */}
            <div className="col-lg-9">
                <Calendar
                    selectedCourses={selectedCourses}
                />
            </div>

            {/* PERSISTENT INFO BAR - FOR LARGE DEVICES */}
            <div className="d-lg-inline-block d-block order-first col-lg-3 col-12 mb-3">
                <Select
                    menuIsOpen={true}
                    options={roomList}
                    onChange={setRoom} 
                    value={room}
                    placeholder='Pick a room' />
            </div>
        </div>
    )
}

export default Rooms