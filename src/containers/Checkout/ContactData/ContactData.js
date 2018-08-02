import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'
class ContactData extends Component{
    constructor(props){
        super(props)
       this.state={ customer_datails:{
                        name:'',
                        age:'',
                        address:{
                            area:'',
                            pincode:''
                        },
                        email_id:''
                    },
                    loading: false 
                 }
        
    }
    orderHandler = (event) =>{
        event.preventDefault();
        this.setState ({loading : true })
        console.log("order handler",this.props.ingredients)
        const data ={
            ingredients:this.state.ingredients,
            total_price:this.state.total_price,
            customer_datails:{
                name:'Ashwini',
                age:'22',
                address:{
                    area:'Bharat Nagar Solapur',
                    pincode:'413005'
                },
                email_id:"ashu@gmail.com"
            } 
        }
        
         axios.post('/orders.json',data)
        .then(res =>{
            console.log("Success",res)
            this.setState ({loading : false, purchasing : false ,saved_flag: true})
            this.props.history.push('/')

        })
        .catch(res =>{
            console.log("Fail",res)
            this.setState ({loading : false , purchasing : false})
        })
    }
    render(){
        let form=(
            <div>
                <h4>Enter Your Contact Details</h4>
                <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="age" placeholder="Age" />
                <input className={classes.Input} type="text" name="area" placeholder="Area" />
                <input className={classes.Input} type="text" name="pincode" placeholder="Pincode" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </div>)
            if(this.state.loading){
                form= <Spinner />
            }

        return(
            < div className={classes.ContactData}>
                {form}
            </div>
        )
    }

}
export default ContactData