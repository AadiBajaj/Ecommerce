import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
// import { set } from 'mongoose';

const NewCollections = () => {

  const [newcollection, setNew_collection] = useState([]);

  useEffect(() => {
      fetch('https://ecommercebackend-s6d7.onrender.com/newcollections')
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => {
              console.log(data);
              setNew_collection(data);
          })
          .catch((error) => {
              console.error("Error fetching new collections:", error);
          });
  }, []);
  
  console.log(newcollection);
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newcollection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
