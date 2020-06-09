import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../HOC/Auxiliary'
import classes from './SideDrawer.css'
const sideDrawer =(props)=>{
    let attachedClasses = [classes.SideDrawer,classes.Close ]
    if(props.open)
    {
        attachedClasses = [classes.SideDrawer,classes.Open ]
    }
    return(
        <Aux> 
        <BackDrop show={props.open} modalClose={props.closed}> </BackDrop>    
        <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}> <Logo height="100%"/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </div>
    </Aux>);
}
export default sideDrawer;