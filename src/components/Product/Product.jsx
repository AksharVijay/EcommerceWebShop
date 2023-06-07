import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
const Product = (product) => {
  return (
    <div>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.brandName} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.brandName}
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                    <Typography variant='h2' color="textSecondary">
                        {product.productName}
                    </Typography>
                
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            
        </Card>

    </div>
  )
}

export default Product;