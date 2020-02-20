import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import About from './pages/about'

function App() {
  return  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        Kailey Terracciano
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>

  </BrowserRouter>
}


export default App;
