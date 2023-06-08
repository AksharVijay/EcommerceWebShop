import React from 'react';
import {Grid} from "@mui/material";
import Product from '../Product/Product';

const Products = () => {

    const products = [
        {
            id: 1,
            brandName: "Adidas",
            productName: "Shoes",
            price: '$100',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/Ultraboost_Light_Shoes_White_HQ6351_02_standard_hover.jpg'

        },
        {
            id: 2,
            brandName: "Nike",
            productName: "Training Kit",
            price: '$120',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/78ad3340-e4ec-4491-ac52-d6270be8c735/fc-barcelona-2022-23-stadium-home-dri-fit-football-shirt-BVkm1s.png'
        }
    ]
  return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map(function(product){
                return(
                    <Grid item key={product.id} xs={12} sm={6} lg={3}>
                        <Product product={product}/>
                    </Grid> 
                )
            })}
        </Grid>
    </main>
  )
}

export default Products