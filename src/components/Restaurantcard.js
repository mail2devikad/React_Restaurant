import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restaurantcard({data}) {
    
  return (
    <Link style={{textDecoration:'none',color:'white'}} to={`./restaurant-details/${data.id}`}>
    <div className='mt-4 mx-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.photograph} className="p-3" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <p>
            Cuisine : {data.cuisine_type}
          </p>
        </Card.Text>
        <Card.Text>
            <p>
                {data.neighborhood}
            </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Link>
  )
}

export default Restaurantcard