import React, { useEffect, useState } from "react";
import "./Addtocart.css";
import { NavLink } from "react-router-dom";
import Placeorder from "./Placeorder";

const Addtocart = ({ addtotal,cart2,setcart2}) => {
  const [Cart, setCart] = useState([]);
  const [click, setclick] = useState(false)
  // Sync cart2 with Cart state initially
  useEffect(() => {
    setCart(cart2);
  }, [cart2]);

  // Handle quantity decrement
  const handleDecrement = (index) => {
   let r=Cart.map((v,i)=>(i===index ? {...v,quantity:v.quantity-1}: v ))
   setcart2(r)
  };

  // Handle quantity increment
  const handleIncrement = (index) => {
    let r=Cart.map((v,i)=>(i===index ? {...v,quantity:v.quantity+1}: v ))
    setcart2(r)
  };

  // Handle delete
  const handleDelete = (index) => {
    let y=(Cart.filter((i,v)=>(v!=index)))
    setcart2(y)
   
  
  };

  // Calculate total price

 const totalPrice= Cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
   <>
   
   <div className="box">
      {Cart.map((item, index) => (
        <div className="column" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="quantity">
            <button onClick={() => handleDecrement(index)}>-</button>
            {item.quantity}
            <button onClick={() => handleIncrement(index)}>+</button>
          </div>
          <div className="delete">
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
          <h2>Rs. {item.price * item.quantity}</h2>
        </div>
      ))}
      <div className={totalPrice=== 0 ?"zero" : "one"}>
        <h2>Total: Rs. <span id="ones"> {totalPrice}</span> </h2>
      </div>
      <div  className={totalPrice ===0 ? "empty" : "zero"}>
       <div id="please">Please Add to Cart </div>
      </div>
   <div    className={totalPrice ===0 ? "zero" : "one"}>
   <button  onClick={()=>
      {
         
        addtotal(totalPrice)
      }
    }><NavLink className='text-black' to='/placeorder'>Placeorder</NavLink></button>
   </div>
    </div>
 
  
   
   
   </>
    
  );
};

export default Addtocart;
