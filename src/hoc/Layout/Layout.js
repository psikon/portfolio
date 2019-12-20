import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
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
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;