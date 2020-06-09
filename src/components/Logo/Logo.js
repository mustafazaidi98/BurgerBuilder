import React from 'react'
import classes from './Logo.css'
import burgerLogo from "../../assets/Logo/logo.png";
const logo = (props) => {
    return(<div className={classes.Logo} style={{height:props.height}}>
        <img src={burgerLogo} alt="Logo"></img>
    </div>)
}
export default logo;