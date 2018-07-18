import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    state = {
        ingredients :{
            cheese : 3,
            salad :2,
            meat : 2,
            becon : 2
        }
    }
    render(){
        return(
            <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <div>Burger Control</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;