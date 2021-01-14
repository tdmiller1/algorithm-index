import React, { useEffect, useCallback, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from './components/Home';
import Page from './components/Page';

import pageJson from './../src/components/pageContent.json';

const App = () => {
  const [pages] = useState(pageJson.pages);
  const [components, setComponents] = useState([]);
  // eslint-disable-next-line
  const [pageStuff, setPageStuff] = useState(null);

  const hasPages = page => !!page.pages

  const printPageTitle = useCallback(page => {
    if(!page) return null

    components.push(page);
    setComponents(components);

    if(hasPages(page)) {
      page.pages.forEach(page => {
        printPageTitle(page);
      })
    }
  }, [components] );

  useEffect(() => {
    if (components.length === 0) {
      pages.forEach(page => {
        if(hasPages(page)) {
          printPageTitle(page);
        }
      })
    }
    setPageStuff(components)
  }, [pages, printPageTitle, components]);

  return (
    <Router component={Home}>
      <div className="flex flex-row h-screen">
        <Navigation pages={components} />
        <Switch>
          <Route exact path="/" component={Home} />
          {
            components.map(page =>
              <Route key={page.videoId} path={page.path}>
                <Page title={page.title} videoId={page.videoId} customComponent={page.customComponent} />
              </Route>
            )
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
