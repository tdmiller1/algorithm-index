import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import Tree from '@naisutech/react-tree';

import pageJson from './pageContent.json';

const Navigation = () => {
  const [pages] = useState(pageJson.pages);

  const onSelect = page => {
    console.log(page);
  }

  return (
    <div className="bg-gray-100">
      <Tree nodes={pages} onSelect={onSelect} />
      <nav>
        <ul>
          <li className="pl-3 pr-3 py-3">
            <Link to="/">Home</Link>
          </li>
          {
            pages.map(page => (
              <li className="whitespace-nowrap pl-3 pr-3 py-3" key={page.videoId}>
                <Link to={page.path}>{page.linkText}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
