import React from 'react'
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

  return (
    <div className='text-start m-4'>
      
      <div className='o-heading'>{course.id}</div>
      <div className='o-title border-bottom o-dark-primary mb-4'>{course.title}</div>
      
      <div className='d-flex flex-row'>
        <div className='w-50 flex-shrink-0 multiple-lines'>{course.description}</div>
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
