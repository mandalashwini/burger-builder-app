import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
const checkoutSummary = (props) =>{
    console.log(props.ingredients,"aa in checkout summary")
        return(
        ( props.ingredients ?
        <div className={classes.CheckoutSummary}>
                <h1>WE HOPE IT TASTED WELL!!</h1>
                <div style={{width: '300px', height: '300px', margin:'auto'}}>
                    <Burger ingredients={props.ingredients} />  
             </div>
            <Button btnType="Danger" clicked={props.checkoutCancelButton}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinueButton}>Continue</Button>
            </div> : null
        )
    )
}

export default checkoutSummary 