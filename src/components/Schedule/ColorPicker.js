import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setColor } from "../../store/selectedCoursesSlice"
import { TwitterPicker } from "react-color"
import {COLORS} from '../../data/'

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
                <button className="btn p-3" style={({ backgroundColor: color })}
                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                    onClick={() => { setChanging(!changing) }}
                >
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <TwitterPicker
                            colors={COLORS.sort()}
                            onChangeComplete={changeColor}
                            width="204px"
                            triangle="hide"
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ColorPicker