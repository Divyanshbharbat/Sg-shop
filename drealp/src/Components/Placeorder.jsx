import React from 'react'
import './Placeorder.css'
import { NavLink } from 'react-router-dom'
const Placeorder = ({cart2,totalPrice}) => {
  return (
   <>
   <div className="giantbox">
    <div className="square">
      <div className="head">
        <h1>Order Summary</h1>
        </div>
        <h5>You selected</h5>
        <div >
          {
            cart2.map((value)=>
            {
              return (
             <div className='column2'>
                <img src={value.image} alt="" />
             <div className="name">
        <b>     {value.name}</b>
             </div>
                

             
             
             
             
             </div>
                




              )
            })
          }

        </div>
        <div className="total">

        <h3><b>Total Price: <span className='color'>{totalPrice}</span> </b></h3>
        </div>
          <form >
          <div className="intake">
            <input placeholder='Name:' type="text" />
            <input placeholder='Contact Number' type="text" />
          </div>
        <div className="intake">
       <input placeholder='Email Address:' type="text" />
        </div>
        <div className="intake">
       <input placeholder='Street Address:' type="text" />
        </div>
        <div className="intake">
       <input placeholder='Street Address Line 2:' type="text" />
        </div>
        <div className="intake">
          <input placeholder='City:' type="text" />
          <input placeholder='State:' type="text" />
        </div>
        <div className="intake">
          <input placeholder='Country:' type="text" />
        </div>
         <textarea placeholder='Message/Suggestion'></textarea>
           <div className="intake">
        <div className="btn2">
          <button>Submit</button>
        </div>
           </div>
          </form>
     
    </div>
   </div>
   
   
   
   </>
  )
}

export default Placeorder