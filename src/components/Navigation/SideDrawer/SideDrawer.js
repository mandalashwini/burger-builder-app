import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
const sideDrawer = (props) => {
    let side_drawer = [classes.SideDrawer,classes.Close]
    if(props.open){
        side_drawer = [classes.SideDrawer,classes.Open]
    }

    return(
        <Aux>
        <Backdrop  className={classes.Backdrop} show={props.open} clicked={props.closed}/>
        <div className={side_drawer.join(' ')}>
                <div className={classes.Logo}>
                <Logo />
                </div>
            <nav>
            <NavigationItems />
            </nav>
        </div>
        </Aux>
    )
}
export default sideDrawer