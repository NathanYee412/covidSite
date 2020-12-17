import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Charts from './components/pages/Charts';
import UsefulResources from './components/pages/UsefulResources';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/charts' exact component={Charts}/>
        <Route path='/usefulresources' exact component={UsefulResources}/>
        <Route path='/about' exact component={AboutUs}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
