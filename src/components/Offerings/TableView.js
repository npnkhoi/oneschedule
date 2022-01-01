import { Link } from "react-router-dom"
import { getCategories, isSelected } from "../../utils/course"
import AddDropBtn from "../AddDropBtn"

const TableView = ({filteredCourses, selectedCourses}) => {
  return <table className='table table-hover table-bordered align-middle'>
    <thead className='table-light'>
      <tr>
        <th className='d-none d-md-table-cell'>ID</th>
        <th className='d-none d-md-table-cell'>Categories</th>
        <th>Title</th>
        <th className='d-none d-md-table-cell'>Instructor</th>
        <th> Action </th>
      </tr>
    </thead>
    <tbody>
      {filteredCourses.map(course => (
        <tr key={course.id}>
            <td className='d-none d-md-table-cell'> 
              {course.id}
            </td>
            <td className='d-none d-md-table-cell'>{getCategories(course)}</td>
            <td>
              <Link to={`/courses/${course.id}`} 
                className='text-decoration-none fw-bold' 
              >
                {course.title}
              </Link>
            </td>
            <td className='d-none d-md-table-cell' >
              {course.instructor}
            </td>
            <td>
              <AddDropBtn course={course} preStatus={isSelected(selectedCourses, course.id)} /> 
            </td>
        </tr>
      ))}
    </tbody>
  </table>
}

export default TableView