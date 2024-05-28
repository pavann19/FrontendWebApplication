import './Sidebar.css';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import Gender from './Gender/Gender';
import React from 'react';

function Sidebar({ handleChange, isOpen }) {
  return (
    <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <Category handleChange={handleChange} />
      <Gender handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
  );
}

export default Sidebar;
