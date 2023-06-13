import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { commerce } from './lib/commerce';

function App() {

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const fetchProducts = async() => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async() => {
    const cartList = await commerce.cart.retrieve();
    setCarts(cartList);
  }

  const handleAddToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(carts);

  return (
    <>
      <Navbar/>
      <Products products={products}/>
    </>
  )
}

export default App
