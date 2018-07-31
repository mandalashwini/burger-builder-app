import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'


const INGREDIENTS_PRICE = {
    cheese : 0.8,
    salad :0.4,
    meat : 0.6,
    Bacon : 0.3
}
class BurgerBuilder extends Component{


    state = {
        ingredients :null,
        total_price: 0,
        purchasable:false,
        purchasing:false,
        loading :false,
        saved_flag : false
    }

    order_purchase = () => {
        this.setState({purchasing : true})
    }
    disable_model = () => {
        this.setState({purchasing: false})
    }
    continue_purchase_alert =() => {
        const data ={
            ingredients:this.state.ingredients,
            total_price:this.state.total_price,
            customer_datails:{
                name:'Ashwini',
                age:'22',
                address:{
                    area:'Bharat Nagar Solapur',
                    pincode:'413005'
                },
                email_id:"ashu@gmail.com"
            }
        }
        //alert("You Can Continue purchasing!!");
        this.setState( {loading :  true})
        //let saved_flag= false
        axios.post('/orders.json',data)
        .then(res =>{
            console.log("Success",res)
            this.setState ({loading : false, purchasing : false ,saved_flag: true})
            

        })
        .catch(res =>{
            console.log("Fail",res)
            this.setState ({loading : false , purchasing : false})
        })
        
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
            console.log(disabledInfo[i])
           // debugger
        }
        let orderSummary = <OrderSummary ingredients={this.state.ingredients} 
                            cancel_button={this.disable_model}
                            continue_button={this.continue_purchase_alert}
                            price={this.state.total_price}/>;
        if (this.state.loading){
            orderSummary = <Spinner />
        }
        let burger = <Spinner />
        if(this.state.ingredients)
        burger =(
                    <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls AddIngredients={this.addIngredientHandler} 
                    RemoveIngredients={this.removeIngredientsHandler}
                    disabled={disabledInfo} 
                    purchase ={this.state.purchasable}
                    ordered={this.order_purchase}
                    price={this.state.total_price}/> 
                    </Aux>
                  )

        return(

            <Aux>
                { this.state.purchasing ? (
                <Modal show={this.state.purchasing} backdrop_click={this.disable_model}>
                    {orderSummary}
                </Modal>) : null}
                {burger}
                    
            </Aux>
        )
    }
}

export default BurgerBuilder;
