/* eslint-disable react/jsx-key */
import React from 'react'
import { useSelector } from 'react-redux'
import { getDescription, getNotes, getSchedule, isSelected } from '../utils/course'
import AddDropBtn from './AddDropBtn'
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
  const selectedCourses = useSelector(state => state.selectedCourses.value)
  const selected = isSelected(selectedCourses, course.id)

  return (
    <div className='text-start m-4'>
      
      <div className="d-flex flex-column border-bottom mb-4 align-items-start">
        <div className='d-flex flex-row align-items-end w-100'>
          <div className='o-heading flex-grow-1'>
            {course.id}  
          </div>
          <AddDropBtn course={course} preStatus={selected} />
        </div>

        <div className='o-title  o-dark-primary'>{course.title}</div>
      </div>
      
      <div className='d-flex flex-row justify-content-around'>
        <div className='description flex-shrink-0 multiple-lines'>
          {getDescription(course).split('\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className='flex-grow-1 ms-5'>
          <table className='table table-hover table-bordered'>
            <tbody>
              <Row header='Instructor' content={course.instructor} />
              <Row header='Schedule' content={getSchedule(course)} />
              <Row header='Credits' content={course.credits} />
              <Row header='Further notes' content={getNotes(course)} />
              {/* <Row header='Dates' content={getDates(course)} />
              <Row header='Capacity' content={course.capacity} />
              <Row header='Type' content={course.type} /> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OneCourse
