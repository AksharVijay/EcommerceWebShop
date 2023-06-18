import React from 'react';
import {Container, Typography, Button, Grid } from '@mui/material';
// import EmptyCart from './EmptyCart/EmptyCart';
// import FilledCart from './FilledCart/FilledCart';
import styles from "./Cart.module.css"

const Cart = ({ carts }) => {
    const isEmpty = 0;

    const EmptyCart = () =>  {
        return(
            <div>
            <Typography> You have no items in your shopping cart, start adding some!</Typography>
        </div>
        )
    }

    const FilledCart = () => {
        <>
            <Grid container spacing={3}>
                {carts.map((item) => (
                    <>
                        <Grid item xs={12} sm={4} key={item.id} >
                            <div>
                                {item.name}
                            </div>
                        </Grid>
                        <div className = {styles.cardDetails}>
                            <Typography variant='h4'>
                                Subtotal: { item.subtotal.formatted_with_symbol}
                            </Typography>
                            <div>
                                <Button className={styles.emptyButton} size="large" type="button" variant="contained" color="secondary">
                                    Empty Cart
                                </Button>
                                <Button className={styles.checkoutButton} size="large" type="button" variant="contained" color="primary">
                                    Checkout 
                                </Button>
                            </div>
                        </div>
                    </>
                ))}
            </Grid>
            </>
    }
  return (
    <Container>
        <div className={styles.toolbar}>
            <Typography className={styles.title} variant='h3'>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart/> : <FilledCart/>}
        </div>
    </Container>
  )
}

export default Cart