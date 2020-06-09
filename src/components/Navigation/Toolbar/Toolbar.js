import React from 'react'
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = props =>{

        return(
        <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.toggleDrawer}></DrawerToggle>
        <Logo height='80%'/>
        <nav  className={classes.DesktopOnly}>
        <NavigationItems/>
        </nav>
        </header>
        )
}
export default Toolbar;