import React from 'react'
import classes from './Button.css'
import Aux from '../../../hoc/Aux'
const button = (props) => {
   return(
       <Aux>
        <button className={[classes.Button,classes[props.btnType]].join(' ')}
        onClick={props.clicked}
        >{props.children}</button>  
        </Aux>
   )
}

export default button;