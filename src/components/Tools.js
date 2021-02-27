import './Tools.css'
const Tools = ({setChosenCourses, setFilter}) => {
  const clearAll = () => setChosenCourses([])
  const changeText = (event) => {
    const text = event.target.value;
    setFilter(text);
  }
  return (
    <div className="shadow mb-3 border rounded w-100 d-flex flex-row justify-content-between p-2">
      <input className="filter-input form-control mr-2" onChange={changeText} placeholder="Search for course or instructor ..." />
      <button className="btn btn-light btn-outline-dark" onClick={clearAll}>Clear All</button>
    </div>
  )
}

export default Tools