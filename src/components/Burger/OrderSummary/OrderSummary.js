import React,{Component} from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{
    componentWillUpdate(){
        console.log("order summary")
    }
    render(){
        const order_ingredients = Object.keys(this.props.ingredients).map(key =>{
            return(
                <li key={key}><span style={{textTransform : 'capitalize'}}>{key} </span>=>{this.props.ingredients[key]}</li>
            )
        })
        return (
            <Aux>
                <h3>You Order Summary</h3>
                <p>Delicious Burger with following ingrdients..</p>
                <ul>
                    {order_ingredients}
                </ul>
                <p><strong>Total Price:- {this.props.price.toFixed(2)}</strong></p>
              <Button btnType="Success" clicked={this.props.continue_button}>Continue</Button>
              <Button btnType="Danger" clicked={this.props.cancel_button}>Cancel</Button>
            </Aux>
        )
        
    }
}

export default OrderSummary