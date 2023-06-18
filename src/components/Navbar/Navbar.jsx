import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import logo from "../../assets/ecommerce.jpg";
import styles from "./Navbar.module.css";

const Navbar = ({totalItems}) => {
  return (
    <div>
        <AppBar position='fixed' className={styles.appBar} color="inherit">
            <Toolbar>
                <Typography variant='h6' className={styles.title} color="inherit">
                    <img src={logo} alt='Ecommerce' height="25px" className={styles.image} />
                     Ecommerce App
                </Typography>
                <div className={styles.grow}></div>
                <div className={styles.button}>
                    <IconButton aria-label='Show cart items' color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar;