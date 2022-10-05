import {SUCCESS,FAIL} from'../constants/restuarantConstants';
import axios from "axios";


export const RestaurantsList=()=> async (dispatch)=>{
    try{
    const {data}=await axios.get('/restaurants.json')

    dispatch({
        type:SUCCESS,payload:data.restaurants
    })
}
catch(error){
    dispatch({
        type:FAIL,error:error
    })
}
}
