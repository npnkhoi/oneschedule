import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import './App.scss';
import Main from './layout/Main';
import Footer from './layout/Footer';
import TopNav from './layout/TopNav'

function App() {
  return (
    <Router>
      <TopNav />
      <Main />
      <Footer />
    </Router>
  );
}
export default App;
