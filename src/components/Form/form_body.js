import React from 'react'
import Aux from '../../hoc/Aux'
import form_classes from  './form_body.css'
class Form_body  extends React.Component {
                render(){
                    let f=""
                    if(this.props.bgcolor==="red")
                     f= form_classes.red;
                    if(this.props.bgcolor==="green")
                     f= form_classes.green;
                    return(
                    <div className={f}>
                    <p>First Name:<input type="text" value={this.props.fname} name="fname" onChange={this.props.changed}/></p>
                    <p>Last Name<input type="text" value={this.props.lname} name="lname" onChange={this.props.changed}/></p>
                    <p>Email Id<input type="email" value={this.props.email} name='email' onChange={this.props.changed}/></p>
                    <input type="submit" onClick={this.props.clicked}/>
                    </div>
    
                    )
                }
}
export default Form_body