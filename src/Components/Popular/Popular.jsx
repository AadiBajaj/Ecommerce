import React, { useEffect,useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {

  const[data_popular,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('https://ecommercebackend-s6d7.onrender.com/popularinskincare')
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => {
              console.log(data);
              setPopularProducts(data);
          })
          .catch((error) => {
              console.error("Error fetching new collections:", error);
          });
  },[])
  return (
    <div className='popular'>
      <h1>POPULAR IN SKINCARE</h1>
      <hr />
      <div className="popular-item">
        {data_popular.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
