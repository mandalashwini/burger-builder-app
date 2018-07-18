import React from 'react'
import classes from './Burger.css'
import Burger_Ingredient from './Burger_ingredients/Burger_ingredients'


const burger = (props) => {
        const new_ingredients = Object.keys(props.ingredients)
        let transformed_ingredients = new_ingredients.map(keys=>{
            return [...Array(props.ingredients[keys])].map((_,i) =>{
                
                return <Burger_Ingredient type={keys} key={keys+i}/>
            })

        }).reduce((acc,val)=>{
                return acc.concat(val)
        },[])
        console.log("aaaaa",{transformed_ingredients})
        console.log("------------new Ingredients------------",{new_ingredients})
        console.log("11---33----44-----Ingredients------------",{transformed_ingredients})
        if (transformed_ingredients.length == 0){
            transformed_ingredients=<p>Please enter ingredients</p>
        }
        return(
            <div className={classes.Burger}>
            <Burger_Ingredient type="bread-top"/>
            {transformed_ingredients}
            <Burger_Ingredient type="bread-bottom"/>
            </div>
        )
}
export default burger;
