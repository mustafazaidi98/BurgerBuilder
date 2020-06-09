import React from 'react'
import Aux from '../../../HOC/Auxiliary'
import Button from '../../UI/Button/Button'
const orderSummary = props => {
const ingr = props.ingrs;
const comp = Object.keys(ingr).map(ikeys => {
    return (<h3><span style= {{textTransform:'capitalize'}}>{ikeys}</span> : {ingr[ikeys]} </h3>)
});
return(
    <Aux>
        <h2>Your Order</h2>
        <h3>A Burger with ingredients:</h3>
        <ul>{comp}</ul>
        <h2>Total Price {props.price}pkr</h2>
        <h3>Continue to Checkout?</h3>
        <Button Type="Danger" Click={props.Cancel}>Cancel</Button>
        <Button Type="Success" Click={props.proceed}>Sure</Button>
    </Aux>
)
}
export default orderSummary;