import './App.css';
import React  from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Timetable from './components/Timetable';
import NavBar from './components/NavBar';
import Offerings from './components/Offerings';

function App() {
  return (
    <Router>
      <Header />      

      <div className="d-flex flex-row">
        <NavBar />
        <Switch>
          
          <Route path='/offerings'>
            <Offerings />
          </Route>

          <Route path='/'>
            <Timetable />
          </Route>
        </Switch>
      </div>
      <ToastContainer autoClose={3000} position={"bottom-left"} hideProgressBar={true}/>
    </Router>
  );
}
export default App;
