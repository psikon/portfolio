import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import BackDrop from '../../UI/Backdrop/Backdrop';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import DeLogo from '../../../resources/german.jpg'
import EnLogo from '../../../resources/englisch.jpg'

import './SideDrawer.css'


const sideDrawer = (props) => {

    const technologies = (props.german) ? "Technologien" : "Technologies";
    const experience = (props.german) ? "Berufserfahrung" : "Experience";
    const education = (props.german) ? "Ausbildung" : "Education";
    const contact = (props.german) ? "Kontakt" : "Contact";
    const logo = (props.german) ? DeLogo : EnLogo
    const languageAlt = (props.german) ? "Englisch" : "Deutsch";

    let sideDrawerClasses = "SideDrawer Close";
    let navigationClasses = "NavigationItems MobileOnly Close"
    if (props.open) {
        sideDrawerClasses = "SideDrawer Open"
        navigationClasses = "NavigationItems MobileOnly Open"
    }

    return(
        <Aux>
            <BackDrop 
                show={props.open} 
                clicked={props.closed}/>
            <div className={sideDrawerClasses}>
                <nav>
                    <ul className={navigationClasses}>
                        <div>
                            <NavigationItem link="#technologies" >{technologies}</NavigationItem>
                            <NavigationItem link="#experience" >{experience}</NavigationItem>
                            <NavigationItem link="#education" >{education}</NavigationItem>
                            <NavigationItem link="#contact" >{contact}</NavigationItem>
                            <input 
                                type="image" 
                                src={logo} 
                                alt={languageAlt} 
                                width="30"
                                onClick={props.toggleLanguage}/> 
                        </div>

                    </ul>
                </nav>
            </div>    
        </Aux>
        
    );
};

export default sideDrawer;