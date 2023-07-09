import React,{useEffect} from 'react'
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state)=> state)
    const dispatch = useDispatch();
    const fetchProducts = async() =>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log(err)
        })
        dispatch(setProducts(response.data));
        // console.log(response.data);
    };
    useEffect(()=>{
        fetchProducts();
    })
    // console.log("Product  ",products);
  return (
    <div className='ui grid container' style={{display:'flex',flexDirection:'row',}}>
       <ProductComponent/>
    </div>
  )
}

export default ProductListing