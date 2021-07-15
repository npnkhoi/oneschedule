import React from 'react'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { toggleSelection } from '../store/courseSlice'
import './OneCourse.css'

const Row = ({header, content}) => {
  return (
    <tr>
      <td className='fw-bold'> {header} </td>
      <td className='multiple-lines'> {content} </td>
    </tr>
  )
}

const OneCourse = ({course}) => {
  const dates = `${course.start_date} - ${course.end_date}`
  const schedule = course.schedule
  .map(({day, start_time, end_time}) => `${day} ${start_time} - ${end_time}`)
  .join('\n')
  const notes = course.notes
    .split('\u2022')
    .filter(line => line !== ' ')
    .join('♦ ')
  
  // const history = useHistory()
  const dispatch = useDispatch()

  const onToggleSelection = () => {
    const preStatus = course.selected
    dispatch(toggleSelection({id: course.id}))
    toast.success(preStatus ? 'Course removed!' : 'Course added!', {
      autoClose: 2000
    })
  }

  return (
    <div className='text-start m-4'>
      
      <div className="d-flex flex-column border-bottom mb-4 align-items-start">
        <div className='d-flex flex-row align-items-end w-100'>
          <div className='o-heading flex-grow-1'>
            {course.id}  
          </div>

          <div className='add-btn cta flex-shrink-0'
            onClick={onToggleSelection}
          > 
            { course.selected ? 'Remove from Schedule' : 'Add to Schedule' }
          </div>

          {/* <div className='cta flex-shrink-0 ms-2'
            onClick={() => history.goBack()}
          > 
            <i className='fas fa-arrow-left me-2'/>
            Back to Offerings
          </div> */}
        </div>

        <div className='o-title  o-dark-primary'>{course.title}</div>
      </div>
      
      <div className='d-flex flex-row'>
        <div className='w-50 flex-shrink-0 multiple-lines o-big-body'>{course.description}</div>
        <div className='flex-grow-1 ms-5'>
          <table className='table table-hover table-bordered'>
            <tbody>
              <Row header='Instructor' content={course.instructor} />
              <Row header='Schedule' content={schedule} />
              <Row header='Dates' content={dates} />
              <Row header='Capacity' content={course.capacity} />
              <Row header='Credits' content={course.credits} />
              <Row header='Type' content={course.type} />
              <Row header='Further notes' content={notes} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OneCourse
