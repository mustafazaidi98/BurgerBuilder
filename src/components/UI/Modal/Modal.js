import React from 'react'
import classes from './Modal.css'
import Aux from '../../../HOC/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'
const modal = props =>{
return(
    <Aux>
     <Backdrop modalClose={props.modalClose}
     show={props.show}
     />   
    <div className={classes.Modal}
        style={{
            transform:props.show? 'translateY(0)' : 'translateY(-100ch)',
            opacity: props.show? '1':'0'
                    }}
        >{props.children}</div>
    </Aux>)
}
export default modal;