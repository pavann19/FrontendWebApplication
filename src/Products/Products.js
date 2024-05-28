import './Product.css'

function Products({result, addToCart}) {
  return (
    <>
    <section className="card-container">
    {result}
    </section>
    </>
  )
}

export default Products;
