import React from 'react';
import Navbar from './components/Navbar';

import { 
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import About from './pages/About';
import ContactPage from './pages/Contact_page';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>   
       <div className="App">
       <Navbar title= "tapi boong"/>

       <Route path="/" exact component={HomePage}/>
       <Route path="/about" exact component={About}/>
       <Route path="/Contact" exact component={ContactPage}/>
   
   </div>
   </Router>

  );
}

export default App;