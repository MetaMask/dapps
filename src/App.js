import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedRoute } from 'react-router-transition';
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
          <div className={'animated-wrapper-rule'}>
            <AnimatedRoute
              path="/:category"
              component={Category}
              atEnter={{ offset: 50, opacity: 0 }}
              atLeave={{ offset: 150, opacity: 1 }}
              atActive={{ offset: 0, opacity: 1 }}
              mapStyles={(styles) => ({
                transform: `translateX(${styles.offset}%)`,
              })}
            />
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
