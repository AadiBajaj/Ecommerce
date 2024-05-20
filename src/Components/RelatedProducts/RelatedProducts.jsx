import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import all_product from '../Assets/all_product'
const RelatedProducts = ({productitem}) => {
  let product=all_product.filter((prod)=>{
    return (prod.category===productitem.category && prod.id!==productitem.id)
  });
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {product.slice(0, 4).map((item, index) => (
            <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      ))}
      </div>
    </div>
  )
}

export default RelatedProducts
