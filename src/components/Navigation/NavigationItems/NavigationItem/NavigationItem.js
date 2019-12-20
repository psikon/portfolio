import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './NavigationItem.css';

const navigationItem = (props) =>(
    <li className="NavigationItem text-uppercase">
        <AnchorLink href={props.link}>{props.children}</AnchorLink>
    </li>
);

export default navigationItem;