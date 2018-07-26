import React,{Component} from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
class Modal extends Component{
    render(){
        return(
    <Aux>
        <Backdrop show={this.props.show} clicked={this.props.backdrop_click}/>
    <div className={classes.Modal}  
        style={{
            transform: this.props.show? 'transformY(0)' : 'transformY(-100vh)' ,
            opacity: this.props.show? (1) : (0)
        }}
    >
     {this.props.children}
     </div>
     </Aux>
        )
    }

}

export default Modal