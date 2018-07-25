import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
const sideDrawer = () => {
    return(
        <div className={classes.SideDrawer}>
        <Logo height="11%"/>
        <NavigationItems />
        </div>
    )
}
export default sideDrawer