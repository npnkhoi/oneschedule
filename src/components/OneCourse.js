/* eslint-disable react/jsx-key */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { getCategories, getCourse, getDescription, getNotes, getSchedule, isSelected } from '../utils/course'
import AddDropBtn from './AddDropBtn'
import './OneCourse.scss'

const Row = ({header, content}) => {
  return (
    <tr>
      <td className='fw-bold'> {header} </td>
      <td className='multiple-lines'> {content} </td>
    </tr>
  )
}

const OneCourse = ({courseId}) => {
  const course = getCourse(courseId)
  const selectedCourses = useSelector(state => state.selectedCourses.value)
  const selected = isSelected(selectedCourses, course.id)
  const OneStop = () => (
    <a href={course.url}> {course.id} </a>
  )
  return (
    <div className='text-start m-4'>
      <Helmet>
        <title> {course.title} </title>
      </Helmet>
      
      <div className="d-flex flex-column border-bottom mb-4 align-items-start">
        <div className='d-flex flex-row align-items-end w-100'>
          <div className='o-heading flex-grow-1'>
            {course.id}  
          </div>
          <AddDropBtn course={course} preStatus={selected} />
        </div>

        <div className='o-title o-dark-primary'>{course.title}</div>
      </div>
      
      <div className='d-flex flex-column flex-md-row justify-content-around'>
        <div className=' multiple-lines col-md-6 order-2 order-md-1'>
          {getDescription(course)}
        </div>
        <div className='flex-grow-1 pb-4 pt-md-0 ms-md-5 order-1 order-md-2'>

          <table className='table table-hover table-bordered'>
            <tbody>
              <Row header='Instructor' content={course.instructor} />
              <Row header='Schedule' content={getSchedule(course)} />
              <Row header='Categories' content={getCategories(course)} />
              <Row header='Credits' content={course.credits} />
              <Row header='OneStop URL' content={<OneStop />} />
              <Row header='Further notes' content={getNotes(course)} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OneCourse
