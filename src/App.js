import './App.css';
import './textStyles.css';
import './components/Calendar.css';
import React  from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (
    <Router basename='/oneschedule'>
      <div className="App d-flex flex-row">
        <NavBar />
        <Main/>
      </div>
      <ToastContainer autoClose={3000} position={"bottom-left"} hideProgressBar={true}/>
    </Router>
  );
}
export default App;
