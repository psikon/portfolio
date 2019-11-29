import React from 'react';

import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const toolbar = (props) => (
        <header className="Toolbar">
            <AnchorLink className="AnchorLink" href="#home"><h2>Philipp Hennersdorf</h2></AnchorLink>
            <nav>
            <NavigationItems german={true}/>
            </nav>
        </header>
);

export default toolbar;