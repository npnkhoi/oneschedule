import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'
import Select from 'react-select'
import { getLevel, getMajor, LEVELS, MAJORS } from '../utils/course'
import AddDropBtn from './AddDropBtn'

const CourseCard = ({course}) => {
  return <Link className='course-card d-flex flex-column align-items-center m-4 shadow overflow-hidden' target='_blank'
    to={`/courses/${course.id}`}
  >
    <div className='thumbnail p-2 w-100 flex-shrink-0 d-flex justify-content-center align-items-center'>
      <div className='thumbnail-text o-heading multiple-lines'>{course.id}</div>
    </div>
    <div className='d-flex flex-column align-items-start p-3 text-start'>
      <div className='fw-bold o-dark-primary mb-2'>{course.title}</div>
      <div>{course.instructor}</div>
    </div>
  </Link>
}

const Courses = ({courses}) => {
  const [compact, setCompact] = useState(true)
  const [majorFilter, setMajorFilter] = useState([])
  const [instructorFilter, setInstructorFilter] = useState([])
  const [levelFilter, setLevelFilter] = useState([])

  // Instructor options for filter
  // NOTE: Majors and levels are saved as constants
  const instructors = courses
    .map(course => course.instructor)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(name => ({value: name, label: name}))

  const oneFilter = (filterList, courses, getDetail) => {
    if (filterList.length !== 0) {
      return courses.filter(course => filterList
        .map(obj => obj.value)
        .includes(getDetail(course))
      )
    } else {
      return courses
    }
  }

  const getFilteredCourses = () => {
    let ret = courses

    // Filter the course list over 3 filters
    ret = oneFilter(instructorFilter, ret, (course) => course.instructor)
    ret = oneFilter(majorFilter, ret, (course) => getMajor(course.id))
    ret = oneFilter(levelFilter, ret, (course) => getLevel(course.id))

    return ret
  }

  const TableView = () => {
    return <table className='table table-hover table-bordered align-middle'>
      <thead className='table-light'>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Instructor</th>
          <th style={{width: '25%'}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {getFilteredCourses().map(course => (
          <tr key={course.id}>
              <td>{course.id}</td>
              <td>
                <Link to={`/courses/${course.id}`} className='text-decoration-none fw-bold' target='_blank'>
                  {course.title}
                </Link>
              </td>
              <td>{course.instructor}</td>
              <td> <AddDropBtn course={course} /> </td>
          </tr>
        ))}
      </tbody>
    </table>
  }

  const GalleryView = () => {
    return <div className='d-flex flex-row flex-wrap justify-content-center'>
      {getFilteredCourses().map(course => (
        <CourseCard course={course} key={course.id}/>
      ))}
    </div>
  }

  return (
    <div>
      <div className='d-flex flex-row justify-content-between'>
        <div className='flex-grow-1'>
          <p className='o-title'>Course Offerings</p>
          <div className="alert alert-primary" role="alert">
            When in doubt, please double-check on OneStop and let us know if any mistakes (via email/feedback form).
          </div>
            {compact ? <TableView /> : <GalleryView />}
        </div>

        <div className='right-bar flex-shrink-0 flex-grow-0 sticky-top ms-4'>
          <div className='bg-light p-3 border rounded mb-3'>
            <div className="form-check form-switch d-flex flex-row align-items-center">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                onClick={() => setCompact(!compact)}
              />
              <label className="form-check-label ms-4" htmlFor="flexSwitchCheckDefault">Gallery view</label>
            </div>
          </div>

          <div className='bg-light p-3 border rounded'>
            <p className='o-heading border-bottom pb-1'>Filters</p>

            <div className='mt-3 mb-1'>Majors</div>
            <Select options={MAJORS} isMulti 
              onChange={setMajorFilter}
              />
            
            <div className='mt-3 mb-1'>Instructors</div>
            <Select options={instructors} isMulti
              onChange={setInstructorFilter}
            />

            <div className='mt-3 mb-1'>Levels</div>
            <Select options={LEVELS} isMulti
              onChange={setLevelFilter}
            />

            <div className='mt-3 pt-2 border-top fw-bold'> {getFilteredCourses().length} courses found. </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
