import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedRoute } from 'react-router-transition';
import Home from './pages/Home';
import Category from './pages/Category';
import ScrollToTop from './components/ScrollToTop/';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        await window.ethereum.send('metamask_injectHomepageScripts');
      } catch (e) {
        /**
         * To render the app in the desktop browser we need to set loading to false
         * as it throws by not finding the metamask_injectHomepageScripts event which is only
         * available in MM webview.
         *  */        
        setIsLoading(false);
        console.error(e);
      }
    }

    window.addEventListener('metamask_onHomepageScriptsInjected', () => {
      setIsLoading(false)
    })

    run()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return null

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
