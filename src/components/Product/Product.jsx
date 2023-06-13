import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
import styles from "./Product.module.css";
const Product = ({product}) => {
  return (
    <div>
        <Card className={styles.root}>
            <CardMedia className={styles.media} image={product.image.url} title={product.brandName} />
            <CardContent>
                <div className={styles.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='p' >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                    <Typography dangerouslySetInnerHTML={{__html: product.description}}  variant='body2' color="textSecondary" />
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