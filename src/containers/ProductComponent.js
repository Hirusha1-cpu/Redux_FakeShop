import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Image, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)

    // const {id,title} = products[0];
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Grid.Column key={id}>
                <Link to={`/product/${id}`}>

            <Card>
              <Image src={image} alt={title} />
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>${price}</Card.Meta>
                <Card.Meta>{category}</Card.Meta>
              </Card.Content>
            </Card>
                </Link>
          </Grid.Column>
            // <div className='four column wide' key={id} >
            //     <Link to={`/product/${id}`}>
            //         <div className='ui link cards' style={{ margin: '20px', }}>
            //             <div className='card' style={{ border: '2px solid black', width: '300px', height: '300px', textAlign: 'center', alignItems: 'center' }}>
            //                 <div className='image' style={{ border: '2px solid black', width: '290px', height: '200px', marginBottom: '10px', marginLeft: '3px' }}>
            //                     <img src={image} alt={title} style={{ width: "290px", height: '200px' }} />
            //                 </div>
            //                 <div className='content' style={{ border: '2px solid black', width: '290px', height: '80px', marginLeft: '3px', marginBottom: '10px' }}>
            //                     <div className='header'>{title}</div>
            //                     <div className='meta price'>${price}</div>
            //                     <div className='meta'>{category}</div>
            //                 </div>

            //             </div>

            //         </div>
            //     </Link>
            // </div>
        );
    })
    return (
        <Grid columns={4}>{renderList}</Grid>
    )
}

export default ProductComponent