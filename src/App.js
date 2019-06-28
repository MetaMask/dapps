import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import ScrollToTop from './components/ScrollToTop/';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/categories/:category" component={Category} />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
