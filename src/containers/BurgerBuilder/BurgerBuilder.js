import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENTS_PRICE = {
    cheese : 0.8,
    salad :0.4,
    meat : 0.6,
    Bacon : 0.3
}
class BurgerBuilder extends Component{


    state = {
        ingredients :{
            cheese : 0,
            salad :0,
            meat : 0,
            Bacon : 0
        },
        total_price: 0,
        purchasable:false,
        purchasing:false
    }

    order_purchase = () => {
        this.setState({purchasing : true})
    }
    disable_model = () => {
        this.setState({purchasing: false})
    }
    continue_purchase_alert =() => {
        alert("You Can Continue purchasing!!");
    }


    updatePurchasable = (purchaseInfo) => {
        //const purchaseInfo = {...this.state.ingredients}
        const sum = Object.keys(purchaseInfo).map(keys =>{
            return purchaseInfo[keys]
        }).reduce((acc,val)=>{
                return acc+val
        },0)
        this.setState({purchasable : sum > 0})


    }
    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const updateCount =  oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount

        const updatedPrice = INGREDIENTS_PRICE[type] + this.state.total_price
        this.setState({ingredients:updatedIngredients, total_price:updatedPrice})
        this.updatePurchasable(updatedIngredients);

    } 
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
                return;
        }
        const updateCount =  oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount

        const updatedPrice =  this.state.total_price - INGREDIENTS_PRICE[type]
        this.setState({ingredients:updatedIngredients, total_price:updatedPrice})
        //debugger
        this.updatePurchasable(updatedIngredients);
    }

    render(){
        const disabledInfo = {...this.state.ingredients}
        for (let i in disabledInfo){
            disabledInfo[i] = disabledInfo[i] <= 0
        }
        return(
            <Aux>
                { this.state.purchasing ? (
                <Modal show={this.state.purchasing} backdrop_click={this.disable_model}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    cancel_button={this.disable_model}
                    continue_button={this.continue_purchase_alert}/>
                </Modal>) : null}
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls AddIngredients={this.addIngredientHandler} 
                    RemoveIngredients={this.removeIngredientsHandler}
                    disabled={disabledInfo} 
                    purchase ={this.state.purchasable}
                    ordered={this.order_purchase}
                    price={this.state.total_price}/> 
            </Aux>
        )
    }
}

export default BurgerBuilder;
