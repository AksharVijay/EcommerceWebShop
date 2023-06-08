import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
import styles from "./Product.module.css";
const Product = ({product}) => {
  return (
    <div>
        <Card className={styles.root}>
            <CardMedia className={styles.media} image={product.image} title={product.brandName} />
            <CardContent>
                <div className={styles.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.brandName}
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                    <Typography variant='body2' color="textSecondary">
                        {product.productName}
                    </Typography>
                
            </CardContent>
            <CardActions disableSpacing className={styles.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            
        </Card>

    </div>
  )
}

export default Product;