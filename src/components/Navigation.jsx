import React from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Grid } from '@material-ui/core';

import NavigationLink from './NavigationLink';

const Navigation = ({ pages }) => {

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
              <Button className="whitespace-nowrap pl-3 pr-3 py-3">
                Home
              </Button>
            </Link>
            {pages.map(page =>
              <NavigationLink key={page.videoId} page={page} />
            )}
          </Grid>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
