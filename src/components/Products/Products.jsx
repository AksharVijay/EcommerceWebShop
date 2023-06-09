import React from 'react';
import {Grid} from "@mui/material";
import Product from '../Product/Product';

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map(function(product){
                return(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid> 
                )
            })}
        </Grid>
    </main>
  )
}

export default Products