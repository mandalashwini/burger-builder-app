import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './Burger_ingredients/Burger_ingredients'


const burger = (props) => {
    //debugger
        const new_ingredients = Object.keys(props.ingredients)
    
        let cnt = 0;
        let transformed_ingredients = new_ingredients.map(keys=>{
        
            if (props.ingredients[keys] === 0)
                cnt =cnt + 1
            
            return [...Array(props.ingredients[keys])].map((_,i) =>{
            
                return <BurgerIngredient type={keys} key={keys+i}/> 
            })
    

        })
    
        if (cnt === new_ingredients.length){
            transformed_ingredients=<p>Start Adding Ingredients.....</p>
        }
        return(
            <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformed_ingredients}
            <BurgerIngredient type="bread-bottom"/>
            </div>
        )
}
export default burger;
 