import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-project-b1b5e.firebaseio.com/'
})
instance.interceptors.request.use(req =>{
    console.log("success111",req)
    return req
}, error =>{
    console.log(error)
    console.log("success222",error)
    return error

});

instance.interceptors.response.use(res =>{
    console.log(res)
    return res
}, error =>{
    console.log(error)
    console.log("success222",error)
    return error
})


export default instance;
