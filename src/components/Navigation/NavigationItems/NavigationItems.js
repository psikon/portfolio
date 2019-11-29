import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import DeLogo from '../../../resources/german.jpg'
import EnLogo from '../../../resources/englisch.jpg'

const navigationItems = (props) => {
    const langButton = props.german ? 
        <input className=".language-chooser"type="image" src={DeLogo} alt="Wechsle Sprach" width="30"/> :
        <button><img src={EnLogo} alt="Change language" width="30"/></button>

    return (
    <ul className="NavigationItems">
       <NavigationItem link="#technologies" >Technologies</NavigationItem>
       <NavigationItem link="#experience" >Experience</NavigationItem>
       <NavigationItem link="#education" >Education</NavigationItem>
       <NavigationItem link="#contact" >Contact</NavigationItem>
       {langButton}
    </ul>);
};

export default navigationItems;