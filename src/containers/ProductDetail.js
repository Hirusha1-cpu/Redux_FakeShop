import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProducts,removeSelectedProducts } from '../redux/actions/productActions';
import { Card, Image, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import async from 'hbs/lib/async';

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const { title, image, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch()
    console.log(product);
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => { console.log(err) })
        dispatch(selectedProducts(response.data))
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail()
        return ()=>{
            dispatch(removeSelectedProducts())
        }
    }, [productId])
    // console.log(fetchProductDetail);
    return (
        <div style={{ margin: '50px' }}>
            {Object.keys(product).length === 0 ? (
                <h1>No data</h1>
            ):(

            <Card style={{ border: '2px solid black', width: '1000px', height: '800px',display:'flex',flexDirection:'row' }}>
                <Image src={image} alt={title} />
                <Card.Content style={{width: '1000px', height: '40%', margin:'10px'}}>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>${price}</Card.Meta>
                    <Card.Meta>{category}</Card.Meta>
                    <Card.Meta>{description}</Card.Meta>
                </Card.Content>
            </Card>
            )
        }

        </div>

    )
}

export default ProductDetail