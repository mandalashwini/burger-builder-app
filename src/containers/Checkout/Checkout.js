import React,{Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
class Checkout extends Component{
    
    constructor(props){
        super(props)
        this.state= {
            ingredients:null,            
            total_price: 0
        }
    }
    checkoutContinueHandler = () =>{
       console.log("continue") 
       this.props.history.replace('/checkout/contact-data')

    }
    checkoutCancelHandler = () => {
        console.log(this.props.history)
        this.props.history.goBack();
    }
    componentDidMount(){
       console.log("prosp",this.props)
       const query = new URLSearchParams(this.props.location.search)
       const ingredients = {}
       console.log("11",query)
       debugger
       let price= null
       for(let params of query.entries()){
                if(params[0] === 'price'){
                        price =params[1]
                    
        
                }else{
            ingredients[params[0]] = +params[1];
                }
            console.log("pp",params)
        }
        this.setState( { ingredients :ingredients, total_price:price})
        console.log("total Price:-",this.state.total_price)
       
    }
        render(){
            console.log("data in checkout--",this.state.ingredients)
            return(
                 <div>
                    <CheckoutSummary ingredients={this.state.ingredients}
                        checkoutContinueButton={this.checkoutContinueHandler}
                        checkoutCancelButton={this.checkoutCancelHandler}
                    />
                    <Route path={this.props.match.path + '/contact-data'} 
                    render={(props) => <ContactData ingredients={this.state.ingredients} total_price={this.state.total_price} {...props}/>} /> 
                     
                </div>
            )
        }

}

export default Checkout;
