import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Orders from '../../Orders/Orders';
import Input from '../../../components/UI/Input/Input'
class ContactData extends Component{
    constructor(props){
        super(props)
       this.state={ 
           
            orderForm:{
                    name:{
                        elementType:'input',
                        elementConfig:{
                            type:'text',
                            placeholder:'Your Name'
                        },
                        value:''
                    },
                    age:{
                        elementType:'input',
                        elementConfig:{
                            type:'text',
                            placeholder:'Your Age'
                        },
                        value:''
                    },
                    address:{
                            area:{
                                elementType:'input',
                                elementConfig:{
                                    type:'text',
                                    placeholder:'Area'
                                },
                                value:''
                            },
                            pincode:{
                                elementType:'input',
                                elementConfig:{
                                    type:'text',
                                    placeholder:'Pincode'
                                },
                                value:''
                            },
                        },
                        email_id:{
                            elementType:'input',
                            elementConfig:{
                                type:'email',
                                placeholder:'Your E-Mail'
                            },
                            value:''
                        },
                    },
                    
                    loading: false 
                 }
        
    }
    orderHandler = (event) =>{
        event.preventDefault();
        debugger
        this.setState ({loading : true })
        console.log("order handler",this.props.total_price)
        const orders ={
            ingredients:this.props.ingredients,
            total_price:this.props.total_price,
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
        
         axios.post('/orders.json',orders)
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
                <Input inputtype="text" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="text" type="email" name="email" placeholder="Your Email" />
                <Input inputtype="text" type="text" name="age" placeholder="Age" />
                <Input inputtype="text" type="text" name="area" placeholder="Area" />
                <Input inputtype="text" type="text" name="pincode" placeholder="Pincode" />
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