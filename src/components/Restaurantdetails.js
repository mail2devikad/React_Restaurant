import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row,Image, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Restaurantdetails() {
  const params=useParams()
  const [items, setItems] = useState([])
  async function fetchData() {
      await fetch('/restaurants.json')
          .then((result) => {
              result.json()
                  .then((data) => {
                      setItems(data.restaurants)
                  })
          })
  }
  useEffect(() => {
    fetchData()
}, [])
const restDetails=items.find((item)=>(
   item.id==params.id
))
console.log(restDetails)
  return (
    <div>
      {
        restDetails?(
          <Row>
            <Col>
            <Image className='m-5' style={{width:"85%"}} src={restDetails.photograph}></Image>
            </Col>
            <Col>
            <h4 className='m-5'>Name : {restDetails.name}</h4>
            <h4 className='m-5'>Cuisine : {restDetails.cuisine_type}</h4>
            <h4 className='m-5'>Location : {restDetails.address}</h4>
            <h4 className='m-5'>Near : {restDetails.neighborhood}</h4>
            </Col>
            <Col>
            <ListGroup>Operating Hours : 
              <ListGroup.Item>Monday : {restDetails.operating_hours.Monday}</ListGroup.Item>
              <ListGroup.Item>Tuesday : {restDetails.operating_hours.Tuesday}</ListGroup.Item>
              <ListGroup.Item>Wednesday : {restDetails.operating_hours.Wednesday}</ListGroup.Item>
              <ListGroup.Item>Thursday : {restDetails.operating_hours.Thursday}</ListGroup.Item>
              <ListGroup.Item>Friday : {restDetails.operating_hours.Friday}</ListGroup.Item>
              <ListGroup.Item>Saturday : {restDetails.operating_hours.Saturday}</ListGroup.Item>
              <ListGroup.Item>Sunday : {restDetails.operating_hours.Sunday}</ListGroup.Item>
            </ListGroup>
            </Col>
          </Row>
        ):''
      }
    </div>
  )
}

export default Restaurantdetails