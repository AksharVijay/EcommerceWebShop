import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { commerce } from './lib/commerce';
import Cart from './components/Cart/Cart';

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
    const item = await commerce.cart.add(productId, quantity);
    setCarts(item.carts)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(carts);

  return (
    <>
      <Navbar totalItems={carts.total_items}/>
      <Cart carts={carts}/>
      {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
    </>
  )
}

export default App
