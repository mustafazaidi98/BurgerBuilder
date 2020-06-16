import React,{Component} from "react";
import Aux from '../../HOC/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuilderCotrols/BuilderControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axiosOrders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHanfler'
const  INGREDIENTS_PRICES = {
    salad: 50,
    cheese:50,
    meat: 200,
    bacon:100
}
class BurgerBuilder extends Component
{
    state = {
        ingredients: null,
        price:150.0,
        purchasable: false,
        isOrder: false,
        loading: false,
    }
    componentDidMount(){
        axios.get("https://foodbytes-719ab.firebaseio.com/Ingredients.json").then(
            response=>{
                this.setState({ingredients:response.data})
            }
        )
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
        this.setState({loading:true})
        const order ={
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer:{
                name:"Alley",
                Phone:"03102825349",
                email:"alley@yahoo.com",
                address:{
                    street:"Farooq e Azam",
                    House:"307",
                    Block:"J North"
                }
            }, delivery:"fastest"
        }
        axios.post('/orders.json',order).then(response=>
            
            {console.log(response)
                this.setState({loading:false,isOrder:false})
            }
        
        ).catch(error=>{
            console.log(error)
            this.setState({loading:false,isOrder:false})
        })
    }
    render()
    {
        const disabled = {...this.state.ingredients}
        for(let key in disabled)
        {
            disabled[key] = disabled[key]<=0
        }
        let orderSummary=null;
        let burger =<Spinner/>
        if(this.state.ingredients)
        {
        burger = (
        <Aux><Burger ingrs={this.state.ingredients}/>
        
        <BurgerControls 
            addIngr={this.addIngredientHandler} 
            remove={this.removeIngredientHandler}
            price={this.state.price}
            isDisabled={disabled}
            purchase = {this.state.purchasable}
            placeOrder = {this.modalOpen}
            />
            </Aux>)
             orderSummary=<OrderSummary price={this.state.price} ingrs={this.state.ingredients} Cancel={this.modalClose} proceed={this.proceedCheckoutHandler}></OrderSummary>
        }
        if(this.state.loading)
        {
            orderSummary=<Spinner></Spinner>
        }

        return(
            
            <Aux>
                <Modal show={this.state.isOrder} 
                modalClose={this.modalClose}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}
export default withErrorHandler(BurgerBuilder,axios);