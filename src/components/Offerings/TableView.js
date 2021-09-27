import { Link } from "react-router-dom"
import { getCategories, isSelected } from "../../utils/course"
import AddDropBtn from "../AddDropBtn"

const TableView = ({filteredCourses, selectedCourses}) => {
  return <table className='table table-hover table-bordered align-middle'>
    <thead className='table-light'>
      <tr>
        <th>ID</th>
        <th>Categories</th>
        <th>Title</th>
        <th>Instructor</th>
        <th style={{width: '25%'}}>Action</th>
      </tr>
    </thead>
    <tbody>
      {filteredCourses.map(course => (
        <tr key={course.id}>
            <td>{course.id}</td>
            <td>{getCategories(course)}</td>
            <td>
              <Link to={`/courses/${course.id}`} className='text-decoration-none fw-bold' target='_blank'>
                {course.title}
              </Link>
            </td>
            <td>{course.instructor}</td>
            <td> <AddDropBtn course={course} preStatus={isSelected(selectedCourses, course.id)} /> </td>
        </tr>
      ))}
    </tbody>
  </table>
}

export default TableView