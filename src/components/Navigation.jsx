import React, { useCallback, useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Grid } from '@material-ui/core';

import pageJson from './pageContent.json';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  const [pages] = useState(pageJson.pages);
  const [components, setComponents] = useState([]);
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
    <div className="bg-gray-100">
      <nav>
        <ul>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="p-2"
          >
            <Link to="/">
              <Button contained primary className="whitespace-nowrap pl-3 pr-3 py-3">
                Home
              </Button>
            </Link>
            {components.map(page =>
              <NavigationLink key={page.videoId} page={page} />
            )}
          </Grid>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
