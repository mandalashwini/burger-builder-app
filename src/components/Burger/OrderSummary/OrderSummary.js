import React from 'react'
import Aux from '../../../hoc/Aux'
import { Transform } from 'stream';
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
        </Aux>
    )

}
export default OrderSummary