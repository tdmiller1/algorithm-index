import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const NavigationLink = ({page}) => {
  return (
    <Link to={page.path}>
      <Button className="whitespace-nowrap pl-3 pr-3 py-3" key={page.videoId}>
        {page.linkText}
      </Button>
    </Link>
  )
}

export default NavigationLink;