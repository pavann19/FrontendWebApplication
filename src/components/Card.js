const Card = ({ id, img, title, star, reviews, prevPrice, newPrice, addToCart,availableQuantity }) => {

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {Array(star).fill('⭐').map((star, index) => <span key={index}>{star}</span>)} 
          <span className="total-reviews">({reviews})</span>
        </section>
        <section className="card-price-container">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <button className="cart-btn" onClick={()=> addToCart({ id, img, title, prevPrice, newPrice, availableQuantity })}>
            <h1>Add To Cart</h1>
          </button>
        </section>
      </div>
    </section>
  );
};

export default Card;
