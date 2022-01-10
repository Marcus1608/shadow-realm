import React from 'react';
import './App.scss';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoadingPage from './components/LoadingPage';
import LandingPage from './components/LandingPage';

function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence onExitComplete>
        <Switch location={location} key={location.key}>
          <Route path="/shadow-realm" exact component={LoadingPage} />
          <Route path="marcus1608.github.io/landing" component={LandingPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
