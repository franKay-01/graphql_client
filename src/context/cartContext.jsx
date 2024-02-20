import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage on component mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.product_id === product.product_id);
    if (existingProduct) {
      let initialAmount = 0;
      cart.map((cart_product) =>
        cart_product.product_id === product.product_id ? 
        initialAmount = parseInt(cart_product.quantity) : 0
      );
      increaseQuantity(product.product_id, initialAmount)
      return 
    }
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.unit_amount * item.quantity;
    });
    return total;
  };

  const decreaseQuantity = (productId, quantity) => {
    const updatedCart = cart.map((product) =>
      product.product_id === productId && product.quantity > 1
        ? { ...product, quantity: quantity }
        : product
    );
    setCart(updatedCart);
  };

  const increaseQuantity = (productId, quantity) => {
    const updatedCart = cart.map((product) =>
      product.product_id === productId ? { ...product, quantity: quantity + 1 } : product
    );
    setCart(updatedCart);
  };

  const changePrice = (productId, quantity) => {
    const updatedCart = cart.map((product) =>
      product.product_id === productId ? { ...product, price: product.unit_amount * quantity, quantity: quantity } : product
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.product_id !== productId));
  };

  const getTotalQuantity = () => {
    let total = 0;
    cart.map((product) =>{
      total += parseInt(product.quantity, 10)
      return total;
    });

    return total
  }

  const getCartItemCount = () => {
    return cart.length;
  };

  window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
      const updatedCart = JSON.parse(event.newValue);
      setCart(updatedCart);
    }
  });

  return (
    <CartContext.Provider value={{ cart, addToCart, changePrice, calculateTotal, removeFromCart, getCartItemCount, decreaseQuantity, increaseQuantity, getTotalQuantity}}>
      {children}
    </CartContext.Provider>
  );
};
