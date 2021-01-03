import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

import pageJson from './pageContent.json';

const Navigation = () => {
  const [pages] = useState(pageJson.pages);

  return (
    <div className="bg-gray-100">
      <nav>
        <ul>
          <Link to="/">
            <li className="pl-3 pr-3 py-3">
              Home
            </li>
          </Link>
          {
            pages.map(page => (
              <Link to={page.path}>
                <li className="whitespace-nowrap pl-3 pr-3 py-3" key={page.videoId}>
                  {page.linkText}
                </li>
              </Link>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
