import React  from 'react'
import {HashRouter as Router } from 'react-router-dom'
import './App.scss';
import Main from './Main';
import Footer from './Footer';
import TopNav from './TopNav'

function App() {
  return (
    <Router>
      <TopNav />
      <Main/>
      <Footer />
    </Router>
  );
}
export default App;
