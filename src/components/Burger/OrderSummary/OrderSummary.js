import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) => {
    const order_ingredients = Object.keys(props.ingredients).map(key =>{
            return(
                <li key={key}><span style={{textTransform : 'capitalize'}}>{key} </span>=>{props.ingredients[key]}</li>
            )
    })


    return (
        <Aux>
            <h3>You Order Summary</h3>
            <p>Delicious Burger with following ingrdients..</p>
            <ul>
                {order_ingredients}
            </ul>
            <p><strong>Total Price:- {props.price.toFixed(2)}</strong></p>
          <Button btnType="Success" clicked={props.continue_button}>Continue</Button>
          <Button btnType="Danger" clicked={props.cancel_button}>Cancel</Button>

            
        </Aux>
    )

}
export default OrderSummary