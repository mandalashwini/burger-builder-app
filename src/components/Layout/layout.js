import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import classes from './layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component{
    state ={
        show_drawer:false
    }
    close_sideDrawer_handler = () =>{
        this.setState({
            show_drawer: false
        }
        )
    }
    drawer_toggle_handler = () => {
            this.setState((prevState) =>{
                return{show_drawer: !prevState.show_drawer}
            }

            )
    
    }
render(){
    return(
    <Aux>
            <Toolbar drawer_toggle_click={this.drawer_toggle_handler} />
            <SideDrawer open={this.state.show_drawer} closed={this.close_sideDrawer_handler} />
            <main className={classes.content}>
                {this.props.children}
            </main>
    </Aux>
    )
}
}
export default Layout;