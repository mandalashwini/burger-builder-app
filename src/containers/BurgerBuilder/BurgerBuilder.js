import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    state = {
        ingredients :{
            cheese : 0,
            salad :0,
            meat : 0,
            becon : 0
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