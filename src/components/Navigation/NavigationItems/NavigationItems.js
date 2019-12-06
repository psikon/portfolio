import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import DeLogo from '../../../resources/german.jpg'
import EnLogo from '../../../resources/englisch.jpg'

const navigationItems = (props) => {
    const navigation = props.german ? (
        <ul className="NavigationItems">
            <NavigationItem link="#technologies" >Technologien</NavigationItem>
            <NavigationItem link="#experience" >Berufserfahrung</NavigationItem>
            <NavigationItem link="#education" >Ausbildung</NavigationItem>
            <NavigationItem link="#contact" >Kontakt</NavigationItem>
            <input 
                className=".language-chooser" 
                type="image" 
                src={DeLogo} 
                alt="Wechsle Sprache" 
                width="30"
                onClick={props.toggleLanguage}/> 
        </ul>) : (
        <ul className="NavigationItems">
            <NavigationItem link="#technologies" >Technologies</NavigationItem>
            <NavigationItem link="#experience" >Experience</NavigationItem>
            <NavigationItem link="#education" >Education</NavigationItem>
            <NavigationItem link="#contact" >Contact</NavigationItem>
            <input 
                className=".language-chooser"
                type="image" 
                src={EnLogo} 
                alt="Change language" 
                width="30"
                onClick={props.toggleLanguage}/> 
        </ul>);
    return navigation;
};

export default navigationItems;