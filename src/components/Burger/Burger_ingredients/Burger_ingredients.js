import React,{Component} from 'react'
import propTypes from 'prop-types'
import classes from './Burger_ingredients.css'
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';
class burger_ingredients extends Component{
    render(){
    let ingredients = null 

        switch(this.props.type){
            case ('bread-bottom'):
                                ingredients = <div className={classes.BreadBottom}></div>;
                                break;
            case ('bread-top'):
                            ingredients = <div className={classes.BreadTop}>
                                                <div className={classes.Seeds1}></div>
                                                <div className={classes.Seeds2}></div>
                                            </div>;
                                break;

            case ('meat') : ingredients = <div className={classes.Meat}></div>;
                            break;


            case ('cheese') : ingredients = <div className={classes.Cheese}></div>;
                            break;


            case ('becon') : ingredients = <div className={classes.Becon}></div>;
                            break;


            case ('salad') : ingredients = <div className={classes.Salad}></div>;
                            break;
            default : ingredients = null;
            
        }
    return ingredients;
    }
} ;

burger_ingredients.propTypes = {
    type:propTypes.string.isRequired
}


export default burger_ingredients;