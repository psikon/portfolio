import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import './SideDrawer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const sideDrawer = (props) => {
    return(
        <div>
            <nav>
                <NavigationItems />
            </nav>
        </div>    
    );
};

export default sideDrawer;