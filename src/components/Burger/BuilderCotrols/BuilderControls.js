import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
];
const buildControls = props => {
   return( <div className={classes.BuildControls}>
        <h2>Price: {props.price}</h2>
        {controls.map( ctrl => (
            <BuildControl key={ctrl.label}
             label={ctrl.type} 
             addIngr={()=>props.addIngr(ctrl.type)}
               remove={()=>props.remove(ctrl.type)}
               disabled={props.isDisabled[ctrl.type]}
               />
        ))}
        <button className={classes.OrderButton} 
            disabled={!props.purchase}
            onClick={props.placeOrder}>
            ORDER NOW
            </button>
            </div>)
};
export default buildControls;