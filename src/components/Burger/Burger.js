import React from 'react'
import classes from './Burger.css'
import Burger_Ingredient from './Burger_ingredients/Burger_ingredients'

const burger = (props) => {

        return(
            <div className={classes.Burger}>
            <Burger_Ingredient type="bread-top"/>
            <Burger_Ingredient type="cheese"/>
            <Burger_Ingredient type="meat"/>
            <Burger_Ingredient type="bread-bottom"/>
            </div>
        )
}
export default burger;