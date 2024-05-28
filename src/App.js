import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Cartitems from "./Cartitems/Cartitems";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import React, { useState } from "react";

const MainPage = ({ query, handleInputChange, addToCart, filteredData, selectedCategory, handleChange, handleClick, cart, toggleSidebar, isSidebarOpen }) => {
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} isOpen={isSidebarOpen} />
      <Recommended handleClick={handleClick} />
      <Products result={result} addToCart={addToCart} />
    </>
  );
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(""); // State for error message
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingProductIndex].quantity < product.availableQuantity) {
          updatedCart[existingProductIndex].quantity += 1;
          setError(""); // Clear error message if quantity is valid
          return updatedCart;
        } else {
          setError(`Cannot add more than ${product.availableQuantity} items of ${product.title}.`); // Set error message
          return prevCart;
        }
      } else {
        if (product.availableQuantity > 0) {
          setError(""); // Clear error message if quantity is valid
          return [...prevCart, { ...product, quantity: 1 }];
        } else {
          setError(`Cannot add ${product.title} to the cart. No stock available.`); // Set error message
          return prevCart;
        }
      }
    });
  };

  // Input Filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title, gender }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected ||
          gender === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice, availableQuantity }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          addToCart={addToCart}
          availableQuantity={availableQuantity}
        />
      )
    );
  }

 // const location = useLocation();  Use this hook to get the current route

  return (
    <div className="app">
      <Navigation 
        query={query} 
        handleInputChange={handleInputChange} 
        cartCount={cart.length} 
        toggleSidebar={toggleSidebar}
      />
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <Routes>
        <Route path="/" element={
          <MainPage 
            query={query} 
            handleInputChange={handleInputChange} 
            addToCart={addToCart} 
            filteredData={filteredData} 
            selectedCategory={selectedCategory} 
            handleChange={handleChange} 
            handleClick={handleClick} 
            cart={cart}
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
        } />
        <Route path="/cart" element={<Cartitems setCart={setCart} cart={cart} setError={setError} />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
