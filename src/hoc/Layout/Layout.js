import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }


    render () {
        console.log(this.state.showSideDrawer)
        return (
            <Aux>
                <Toolbar 
                    german={this.props.german} 
                    toggleLanguage={this.props.toggleLanguage} 
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} 
                    german={this.props.german}
                    toggleLanguage={this.props.toggleLanguage}/>
                <main className="Layout">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;