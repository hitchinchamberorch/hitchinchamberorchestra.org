import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Concerts } from './Concerts';
import { About } from './About';
import { Contact } from './Contact';
import { Members } from './Members';
import { Home } from './Home';

export const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/concerts">
          <Concerts />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/join">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
      </Switch>
    </Router>
  );
};
