import './App.css';
import React  from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Timetable from './components/Timetable';
import NavBar from './components/NavBar';
import Courses from './components/Courses';

const Main = () => (
  <Switch>
    <Route path='/about'>
      <div>about</div>
    </Route>
    <Route path='/contribute'>
      <div>contribute</div>
    </Route>
    <Route path='/help'>
      <div>help</div>
    </Route>
    <Route path='/courses'>
      <Courses />
    </Route>
    <Route path='/'>
      <Timetable />
    </Route>
    
  </Switch>
)

function App() {
  return (
    <Router>
      <div className="d-flex flex-row">
        <NavBar />
        <Main/>
      </div>
      <ToastContainer autoClose={3000} position={"bottom-left"} hideProgressBar={true}/>
    </Router>
  );
}
export default App;
