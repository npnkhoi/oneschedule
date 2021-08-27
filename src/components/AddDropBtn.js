import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { toggleSelection } from '../store/courseSlice'

const AddDropBtn = ({course}) => {
  const dispatch = useDispatch()

  const onToggleSelection = () => {
    const preStatus = course.selected
    dispatch(toggleSelection({id: course.id}))
    toast.success(preStatus ? 'Course removed!' : 'Course added!', {
      autoClose: 2000
    })
  }

  return (<div className={`cta ${course.selected ? 'o-bg-yellow' : ''} flex-shrink-0`}
    onClick={onToggleSelection}
  > 
    { course.selected ? 'Remove' : 'Add to schedule' }
  </div>)
}

export default AddDropBtn