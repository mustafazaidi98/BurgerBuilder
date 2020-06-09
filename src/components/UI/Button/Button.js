import React from "react";
import classes from './Button.css'
const button = props =>{
return (<button className={[classes.Button,classes[props.Type]].join(' ')}
     onClick={props.Click}>{props.children}</button>)   
}
export default button;