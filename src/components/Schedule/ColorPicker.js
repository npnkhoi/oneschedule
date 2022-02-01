import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setColor } from "../../store/selectedCoursesSlice"
import { TwitterPicker } from "react-color"
import {COLORS} from '../../data/'
import './ColorPicker.scss'

const ColorPicker = ({ courseId }) => {
    const [changing, setChanging] = useState(false)
    const color = useSelector(state => state.selectedCourses.value
        .filter(course => course.id === courseId)[0].color)
    const dispatch = useDispatch()

    const changeColor = (color) => {
        dispatch(setColor({ id: courseId, color: color.hex }))
        setChanging(false)
    }
    return (
        <div className='me-2'>
            <div className="dropdown">
                <button className="btn p-3 m-1" style={({ backgroundColor: color })}
                    onClick={() => { setChanging(!changing) }}
                />   
                {
                    changing
                    ? <TwitterPicker
                        colors={COLORS.sort()}
                        onChangeComplete={changeColor}
                        width="18rem"
                        triangle="hide"
                        className="position-absolute twitter-picker border"
                    />
                    : <></>
                }
            </div>
        </div>
    )
}

export default ColorPicker