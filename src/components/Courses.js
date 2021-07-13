import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'

const CourseCard = ({course}) => {
  const major = (id) => {
    const head = id.slice(0, id.indexOf('_'))
    const split = head.search(/\d/g)
    return head.slice(0, split) + head.slice(split, head.length)
  }

  return <Link className='course-card d-flex flex-column align-items-center m-4 shadow overflow-hidden'
    to={`/courses/${course.id}`}
  >
    <div className='thumbnail p-2 w-100 flex-shrink-0 d-flex justify-content-center align-items-center'>
      <div className='thumbnail-text o-heading multiple-lines'>{major(course.id)}</div>
    </div>
    <div className='d-flex flex-column align-items-start p-3 text-start'>
      <div className='fw-bold o-dark-primary mb-2'>{course.title}</div>
      <div>{course.instructor}</div>
    </div>
  </Link>
}

const Courses = ({courses}) => {
  const [compact, setCompact] = useState(false)

  const TableView = () => {
    return <table className='table table-hover table-bordered'>
      <thead className='table-light'>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Instructor</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr>
              <td>{course.id}</td>
              <td>
                <Link to={`/courses/${course.id}`} className='text-decoration-none fw-bold'>
                  {course.title}
                </Link>
              </td>
              <td>{course.instructor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  }

  const GalleryView = () => {
    return <div className='d-flex flex-row flex-wrap justify-content-center'>
      {courses.map(course => (
        <CourseCard course={course} key={course.id}/>
      ))}
    </div>
  }

  return (
    <div>
      <div className='d-flex flex-row justify-content-between'>
        <div>
          <p className='o-title'>Course Offerings</p>
          {compact ? <TableView /> : <GalleryView />}
        </div>

        <div className='right-bar bg-light flex-shrink-0 flex-grow-0 sticky-xl-top p-3 border rounded'>
          <div class="form-check form-switch w-75">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
              onClick={() => setCompact(!compact)}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">Compact View</label>
          </div>  

          <p>Filters</p>
        </div>
      </div>
    </div>
  )
}

export default Courses
