import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { toggleSelection } from "../store/selectedCoursesSlice"

const AddDropBtn = ({course, preStatus}) => {
  const dispatch = useDispatch()

  const onToggleSelection = () => {
    dispatch(toggleSelection({id: course.id}))
    toast.success(preStatus ? 'Course removed!' : 'Course added!', {
      autoClose: 2000
    })
  }

  return (<div className={`cta ${preStatus ? 'o-bg-yellow' : ''} flex-shrink-0`}
    onClick={onToggleSelection}
  > 
    { preStatus ? 'Remove' : 'Add to schedule' }
  </div>)
}

export default AddDropBtn