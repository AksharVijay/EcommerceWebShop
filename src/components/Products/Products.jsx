import React from 'react';
import Grid from "@mui/material";
import Product from '../Product/Product';

const Products = () => {

    const products = [
        {
            id: 1,
            brandName: "Adidas",
            productName: "Shoes",
            price: '$100'

        },
        {
            id: 2,
            brandName: "Nike",
            productName: "Training Kit",
            price: '$120'
        }
    ]
  return (
    <div>
        <Grid container justify="center" spacing={4}>
            {products.map(function(product){
                return(
                    <Grid item key={product.id} xs={12} sm={6} lg={3}>
                        <Product product={product}/>
                    </Grid> 
                )
            })}
        </Grid>
    </div>
  )
}

export default Products