const Tools = ({setChosenCourses, setFilter}) => {
  const clearAll = () => setChosenCourses([])
  const changeText = (event) => {
    const text = event.target.value;
    console.log(text);
    setFilter(text);
  }
  return (
    <div className="mb-3">
      <input className="filterInput mr-3" onChange={changeText} />
      <button onClick={clearAll}>Clear All</button>
    </div>
  )
}

export default Tools