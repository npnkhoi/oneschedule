import React, { useState } from 'react'
import './index.scss'
import { getLevel, getMajor } from '../../utils/course'
import { useSelector } from 'react-redux'
import moment from 'moment'
import config from '../../utils/config'
import { selectCurrentSelectedCourseIds, selectCurrentTerm, selectTerm } from '../../store/selectors'
import { Helmet } from 'react-helmet'
import TableView from './TableView'
import GalleryView from './GalleryView'
import Filter from './Filter'
import { usePersistedState } from '../../hooks'

const GalleryToggle = () => {
  return <div className='d-none d-lg-block gallery-view bg-light p-3 border rounded mb-3'>
    <div className="form-check form-switch d-flex flex-row align-items-center">
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
        onClick={() => setCompact(!compact)}
      />
      <label className="form-check-label ms-4" htmlFor="flexSwitchCheckDefault">Gallery (BETA)</label>
    </div>
  </div>
}

const Offerings = () => {
  const [compact, setCompact] = useState(true)
  const selectedCourses = useSelector(selectCurrentSelectedCourseIds)
  const courses = useSelector(selectCurrentTerm)
  const term = useSelector(selectTerm)

  const [majorFilter, setMajorFilter] = usePersistedState('majorFilter', [])
  const [instructorFilter, setInstructorFilter] = usePersistedState('instructorFilter', [])
  const [levelFilter, setLevelFilter] = usePersistedState('levelFilter', [])
  const [categoryFilter, setCategoryFilter] = usePersistedState('categoryFilter', [])

  const getFilteredCourses = () => {
    const oneFilter = (filterList, courses, getDetail, manyToMany = false) => {
      if (filterList.length !== 0) {
        return courses.filter(course => {
          // Determine if a course passes the filterList
          const matchers = filterList
            .map(obj => obj.value)
          if (manyToMany) {
            return matchers.filter(matcher => getDetail(course).includes(matcher))
              .length > 0
          } else {
            return matchers.includes(getDetail(course))
          }
        })
      } else {
        return courses
      }
    }
    let ret = courses
    console.log(instructorFilter.length, majorFilter.length, levelFilter.length, categoryFilter.length);
    // Filter the course list over 3 filters
    ret = oneFilter(instructorFilter, ret, (course) => course.instructor)
    ret = oneFilter(majorFilter, ret, (course) => getMajor(course.id))
    ret = oneFilter(levelFilter, ret, (course) => getLevel(course.id))
    ret = oneFilter(categoryFilter, ret, (course) => course.categories, true)
    return ret
  }

  const filteredCourses = getFilteredCourses()


  // NOTICE: In this component, 'lg' breakpoint is used instead of 'md' as usual.
  return (
    <div className='row'>
      <Helmet>
        <title>{term} Offerings</title>
      </Helmet>

      {/* COURSE LIST */}
      <div className='col-lg-9 order-lg-1 order-2'>
        <div className="alert alert-primary w-100" role="alert">
          {/* <b>Last update: {moment(config.last_updated).fromNow()}. </b> */}
          When in doubt, please double-check on OneStop.
        </div>
        {compact
          ? <TableView filteredCourses={filteredCourses}
            selectedCourses={selectedCourses}
          />
          : <GalleryView filteredCourses={filteredCourses} />}
      </div>

    {/* RIGHT BAR: FILTERS */}
      <div className='right-bar col-lg-3 order-lg-2 order-1'>
        <GalleryToggle />
        <button className="d-lg-none btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsable-filters" aria-expanded="true" aria-controls="collapsable-filters">
          Filter
        </button>
        <Filter
          majorFilter={majorFilter}
          instructorFilter={instructorFilter}
          categoryFilter={categoryFilter}
          levelFilter={levelFilter}
          setMajorFilter={setMajorFilter}
          setInstructorFilter={setInstructorFilter}
          setCategoryFilter={setCategoryFilter}
          setLevelFilter={setLevelFilter}
        />

        <div className='right-bar-course-count my-3 fw-bold'> {filteredCourses.length} course(s) found </div>
      </div>
    </div>
  )
}

export default Offerings
