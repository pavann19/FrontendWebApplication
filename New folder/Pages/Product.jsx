import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDIsplay from '../Components/ProductDisplay/ProductDIsplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import Related from '../Components/Related/Related'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {ProductId} = useParams();
  const product = all_product.find((e)=>e.id === Number(ProductId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDIsplay product={product}/>
      <DescriptionBox/>
      <Related/>
    </div>
  )
}

export default Product