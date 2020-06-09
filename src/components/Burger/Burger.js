import React from "react"
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient"
const burger = props => {
    let mixedIngrs = Object.keys(props.ingrs).map(ikeys=> {
        return [...Array(props.ingrs[ikeys])].map((value,i)=>{return (<BurgerIngredient key={ikeys+i} type={ikeys}/>)})
    }).reduce((arr,element)=>{ return(arr.concat(element))},[])
    console.log(mixedIngrs)
    if(mixedIngrs.length === 0)
    {
        mixedIngrs=(<p>Please enter Ingredients</p>)
    }
    return (<div className={classes.Burger}>
                <BurgerIngredient type='bread-top'/>
                {mixedIngrs}
                <BurgerIngredient type='bread-bottom'/>
                </div>);
}
export default burger;