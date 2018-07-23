import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
import build_control from './BuildControl/BuildControl.css'
const control = [
    {label: 'cheess', type:'cheese'},
    {label: 'Salad', type:'salad'},
    {label: 'Meat', type: 'meat'},
    {label:'Bacon', type: 'Bacon'}

]
 const BuildControls = (props) =>(
            <div className={classes.BuildControls}>
            {control.map(ctrl =>(
                    <BuildControl key={ctrl.label}
                     value={ctrl.label} 
                    added={()=>props.AddIngredients(ctrl.type)}
                    removed={() =>props.RemoveIngredients(ctrl.type)}/>
            ))
            } 
            
            </div>
 ); 

 export default BuildControls