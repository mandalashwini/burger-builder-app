import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import { access } from 'fs';
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
        purchasable:false
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
            <Burger ingredients={this.state.ingredients}/>
                <BuildControls AddIngredients={this.addIngredientHandler} 
                 RemoveIngredients={this.removeIngredientsHandler}
                  disabled={disabledInfo} 
                  purchase ={this.state.purchasable}
                  price={this.state.total_price}/> 
            </Aux>
        )
    }
}

export default BurgerBuilder;
