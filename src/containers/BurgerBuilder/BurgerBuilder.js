import React,{Component} from "react";
import Aux from '../../HOC/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuilderCotrols/BuilderControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const  INGREDIENTS_PRICES = {
    salad: 50,
    cheese:50,
    meat: 200,
    bacon:100
}
class BurgerBuilder extends Component
{
    state = {
        ingredients: {
            cheese :0,
            bacon :0,
            meat : 0,
            salad : 0
        },
        price:150.0,
        purchasable: false,
        isOrder: false
    }
    modalOpen =()=>{
        this.setState({isOrder: true})
    }
    modalClose=()=>
    {
        this.setState({isOrder:false});
    }
    purchasableHandler= (ing) =>{
        const sum = Object.keys(ing).map(
            (ikeys)=>{return (ing[ikeys])   })
            .reduce((sum,element)=>{return(sum+element)}
            ,0)
        this.setState({purchasable : sum>0}) 
    }
    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const UpdatedIngrs = {...this.state.ingredients}
        UpdatedIngrs[type] = newCount;
        const oldPrice = this.state.price;
        const newPrice = oldPrice+INGREDIENTS_PRICES[type];
        this.setState({price:newPrice, ingredients:UpdatedIngrs})
        this.purchasableHandler(UpdatedIngrs);
    }
    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount===0)
        {
            return;
        }
        const newCount = oldCount - 1;
        const UpdatedIngrs = {...this.state.ingredients}
        UpdatedIngrs[type] = newCount;
        const oldPrice = this.state.price;
        const newPrice = oldPrice-INGREDIENTS_PRICES[type];
        this.setState({price:newPrice, ingredients:UpdatedIngrs})
        this.purchasableHandler(UpdatedIngrs);
    }
    proceedCheckoutHandler = ()=>
    {
        alert("You Proceed")
    }
    render()
    {
        const disabled = {...this.state.ingredients}
        for(let key in disabled)
        {
            disabled[key] = disabled[key]<=0
        }
        return(
            
            <Aux>
                <Modal show={this.state.isOrder} 
                modalClose={this.modalClose}>
                    <OrderSummary price={this.state.price} ingrs={this.state.ingredients} Cancel={this.modalClose} proceed={this.proceedCheckoutHandler}></OrderSummary>
                </Modal>
        <Burger ingrs={this.state.ingredients}/>
        
        <BurgerControls 
            addIngr={this.addIngredientHandler} 
            remove={this.removeIngredientHandler}
            price={this.state.price}
            isDisabled={disabled}
            purchase = {this.state.purchasable}
            placeOrder = {this.modalOpen}
            />
            </Aux>
        )
    }
}
export default BurgerBuilder;