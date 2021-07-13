import React from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'

const CourseCard = ({course}) => {
  const major = (id) => {
    const head = id.slice(0, id.indexOf('_'))
    const split = head.search(/\d/g)
    return head.slice(0, split) + '\n' + head.slice(split, head.length)
  }

  return <Link className='course-card d-flex flex-row align-items-center m-4 shadow overflow-hidden'
    to={`/courses/${course.id}`}
  >
    <div className='thumbnail h-100 flex-shrink-0 d-flex justify-content-center align-items-center'>
      <div className='thumbnail-text o-heading multiple-lines'>{major(course.id)}</div>
    </div>
    <div className='d-flex flex-column align-items-start p-4'>
      <div className='o-heading o-dark-primary text-start'>{course.title}</div>
      <div className='text-start'>{course.instructor}</div>
    </div>
  </Link>
}

const Courses = ({courses}) => {
  return (
    <div>
      <p className='o-title'>Course Offerings</p>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {courses.map(course => (
          <CourseCard course={course} key={course.id}/>
        ))}
      </div>
    </div>
  )
}

export default Courses
