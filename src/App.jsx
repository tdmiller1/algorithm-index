import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from './components/Home';
import Page from './components/Page';

import pageContent from './../src/components/pageContent.json';

const App = () => {
  const [pages] = useState(pageContent.pages);

  return (
    <Router component={Home}>
      <div className="flex flex-row h-screen">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          {
            pages.map(page =>
            <Route key={page.videoId} path={page.path}>
              <Page title={page.title} videoId={page.videoId} customComponent={page.customComponent} />
            </Route>)
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
