// import React from 'react'
// import { Button, Grid, Typography } from '@mui/material';
// import styles from "./FilledCart.module.css";
// const FilledCart = ({ carts }) => {
//   return (
//     <div>
//         <Grid container spacing={3}>
//             {carts.map(function(cart){
//                 return(
//                     <>
//                         <Grid item xs={12} sm={4} key={cart.id} >
//                             <div>
//                                 {cart.name}
//                             </div>
//                         </Grid>
//                         <div className = {styles.cardDetails}>
//                             <Typography variant='h4'>
//                                 Subtotal: { cart.subtotal.formatted_with_symbol}
//                             </Typography>
//                             <div>
//                                 <Button className={styles.emptyButton} size="large" type="button" variant="contained" color="secondary">
//                                     Empty Cart
//                                 </Button>
//                                 <Button className={styles.checkoutButton} size="large" type="button" variant="contained" color="primary">
//                                     Checkout 
//                                 </Button>
//                             </div>
//                         </div>
//                     </>
//                 )
//             })}
//         </Grid>
//     </div>
//   )
// }

// export default FilledCart