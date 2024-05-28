import React from 'react';
import './Cartitems.css';
import { IoIosRemove } from "react-icons/io";

const Cartitems = ({ cart, setCart, setError }) => {
  const shippingFee = 10;
  const gstPercentage = 5;
  const extraCharges = 15;

  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity < updatedCart[index].availableQuantity) {
      updatedCart[index].quantity += 1;
      setError(""); // Clear error message if quantity is valid
      setCart(updatedCart);
    } else {
      setError(`Cannot add more than ${updatedCart[index].availableQuantity} items of ${updatedCart[index].title}.`); // Set error message
    }
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setError(""); // Clear error message
      setCart(updatedCart);
    }
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setError(""); // Clear error message
    setCart(updatedCart);
  };


  const calculateSubtotal = () => {
    return cart.reduce((subtotal, item) => subtotal + item.newPrice * item.quantity, 0);
  };

  const calculateShippingFee = () => {
    return calculateSubtotal() > 500 ? 0 : shippingFee;
  };

  const calculateGST = () => {
    return (calculateSubtotal() + calculateShippingFee()) * gstPercentage / 100;
  };

  const calculateTotalPrice = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = subtotal > 500 ? 0 : shippingFee;
    return (subtotal + deliveryFee + calculateGST() + extraCharges).toFixed(2);
  };

  return (
    <section className="cart-items">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="item-details">
                  <div className="remove-btn">
                    <button onClick={() => removeItem(index)}><IoIosRemove className='remove-icon' /></button>
                  </div>
                  <div className="item-title">{item.title}</div>
                  <div className="price-details">
                    <del>{item.prevPrice}</del>
                    <span className="new-price">${(item.newPrice * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="quantity">
                    <button onClick={() => decrementQuantity(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(index)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping Fee:</span>
              <span>${calculateShippingFee().toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>GST ({gstPercentage}%):</span>
              <span>${calculateGST().toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Extra Charges:</span>
              <span>${extraCharges.toFixed(2)}</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>${calculateTotalPrice()}</span>
            </div>
          </div>
          <div className="checkout">
            Proceed to Checkout
          </div>
        </>
      )}
    </section>
  );
};

export default Cartitems;
