import React, { useState } from 'react'
import { useEffect } from 'react'
import Restaurantcard from './Restaurantcard'
import {Col,Row} from 'react-bootstrap'
import {RestaurantsList} from '../actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'
 

function Dashboard() {
    // const [items, setItems] = useState([])

    // async function fetchData() {
    //     await fetch('/restaurants.json')
    //         .then((result) => {
    //             result.json()
    //                 .then((data) => {
    //                     setItems(data.restaurants)
    //                 })
    //         })
    // }

    const dispatch=useDispatch()
    const result=useSelector((state)=>state.restaurantReducer)
    const {restuarant}=result
    console.log(restuarant)
    useEffect(() => {
        // fetchData()
        dispatch(RestaurantsList())
    }, [])
    return (
        <Row>
            {
                restuarant.map((items)=>(

                    <Col className='my-3' md={6} lg={4} xl={3}>
                    <Restaurantcard data={items}/>
                    </Col>
                ))
            }
        </Row>
    )

}


export default Dashboard