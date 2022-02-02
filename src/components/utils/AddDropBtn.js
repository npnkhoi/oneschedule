import React from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { toggleSelection } from "../../store/selectedCoursesSlice"

const AddDropBtn = ({course, preStatus}) => {
  const dispatch = useDispatch()

  const onToggleSelection = () => {
    dispatch(toggleSelection({id: course.id}))
    toast.success(preStatus ? 'Course removed!' : 'Course added!', {
      autoClose: 2000
    })
  }

  return (<div className={`cta ${preStatus ? 'bg-warning text-dark' : ''} flex-shrink-2`}
    onClick={onToggleSelection}
  > 
    { preStatus ? 'Remove' : 'Add' }
  </div>)
}

export default AddDropBtn