import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => {

        return (
            <section className="Toolbar" id="toolbar">
                <header className="Toolbar">
                    <DrawerToogle className="MobileOnly" clicked={props.drawerToggleClicked}/>
                    <AnchorLink className="AnchorLink" href="#home"><h2>Philipp Hennersdorf</h2></AnchorLink>
                    <nav>
                        <NavigationItems german={props.german} toggleLanguage={props.toggleLanguage}/>
                    </nav>
                </header>
                
            </section>
        
    )};
        

export default toolbar;