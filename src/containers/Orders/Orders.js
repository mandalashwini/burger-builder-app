import React,{Component} from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
class Orders extends Component{

    constructor(props){
        super(props)
        this.state ={
            orders:[],
            loading:true
        }
    }
    componentDidMount(){
        axios.get('/orders.json')
        .then(res =>{
            console.log(res)
            const fetchOrders =[];
            for(let key in res.data){
                fetchOrders.push({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({loading:false, orders:fetchOrders})
        })
        .catch(res =>{
            console.log(res)
        })

    }
    render(){
        return(
            <div>
                {this.state.orders.map(order=>(
                        <Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
                </div>
        )
    }
}
export default withErrorHandler(Orders,axios)
