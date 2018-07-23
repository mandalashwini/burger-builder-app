import Aux from '../../hoc/Aux'
import FormBody from './form_body'
import form_classes from './form_body.css'
import React from 'react'
class Form extends React.Component{

    clickHandler = (event) => {
        /*let fn=this.state.details.fname
        if (this.state.cnt === 0){
            alert("Fails") 
        }
            else
            alert ("Welcome!\t"+ fn)*/
            this.state.cnt++;
            if(this.state.cnt % 2 === 0)
                this.state.bgcolor="green"
            else
                this.state.bgcolor="red"
   }
   valueChangeHandler =(event) =>{
        if(event.target.name === "fname"){  
               this.state.details.fname=event.target.value
               this.state.cnt++;
        }
        if(event.target.name === "lname" ){  
            this.state.details.lname=event.target.value
            this.state.cnt++;
         }
        if(event.target.name === "email"){  
        this.state.details.email=event.target.value
        this.state.cnt++;
        }

   }    

   state = {
       details:[
        {
            fname:"",
            lname:"",
            email:""
       } ],
       cnt: 0,
       bgcolor:"red"


   }

    render(){
        return(
            <Aux>   
                    <FormBody clicked={this.clickHandler} changed={this.valueChangeHandler}
                     fname={this.state.details.fname} 
                     lname={this.state.details.lname}
                     email={this.state.details.email} bgcolor={this.state.bgcolor}/>
            </Aux>
        )
        console.log("color",this.state.bgcolor)
    }
}
export default Form;