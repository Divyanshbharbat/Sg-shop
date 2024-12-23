import React from 'react'
import './Placeorder.css'

import { useForm } from 'react-hook-form'
import axios from 'axios'
const Placeorder2 = ({cart2,total}) => {
 let onsubmit=(async ( data)=>
{  
     let res=await  axios.post('http://localhost:3000/placeorder',{data,total,cart2});
     console.log(res)
})
  const{register,handleSubmit,formState:{errors}}=useForm()
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
             <div className='column2' {...register('cart2')}>
                <img src={value.image} alt="" />
             <div className="name">
        <b>     {value.name}</b>
             </div>
                
<div id='price' className="price">
  <b>  {value.quantity*value.price}</b>
</div>
             
             
             
             
             </div>
                




              )
            })
          }

        </div>
        <form  onSubmit={handleSubmit(onsubmit)}>
        <div className="total">

        <h3 ><b>Total Price: <span {...register('total')} className='color'>{total}</span> </b></h3>
        </div>
        
          <div className="intake">
            <input {...register('username',{required:{value:true,message:'Enter the username'}})} placeholder='Name:' type="text" />
            <div>{errors.name && <p className='text-red'>{errors.name.message}</p> }</div>
            <input {...register('mobile',{required:{value:true,message:'Enter the Contact Number'}})} placeholder='Contact Number' type="text" />
            <div>{errors.name && <p className='text-red'>{errors.name.message}</p> }</div>
          </div>
        <div className="intake">
       <input  {...register('email',{required:{value:true,message:'Enter the email'}})} placeholder='Email Address:' type="text" />
       <div>{errors.email && <p className='text-red'>{errors.email.message}</p> }</div>
        </div>
        <div className="intake">
       <input {...register('address',{required:{value:true,message:'Enter the address'}})} placeholder='Street Address:' type="text" />
       <div>{errors.address && <p className='text-red'>{errors.address.message}</p> }</div>
        </div>
        <div className="intake">
       <input {...register('address2',{required:{value:true,message:'Enter the address2'}})} placeholder='Street Address Line 2:' type="text" />
       <div>{errors.address2 && <p className='text-red'>{errors.address2.message}</p> }</div>
        </div>
        <div className="intake">
          <input {...register('city',{required:{value:true,message:'Enter the city'}})} placeholder='City:' type="text" />
          <div>{errors.city && <p className='text-red'>{errors.city.message}</p> }</div>
          <input {...register('state',{required:{value:true,message:'Enter the state'}})} placeholder='State:' type="text" />
          <div>{errors.state && <p className='text-red'>{errors.state.message}</p> }</div>
        </div>
        <div className="intake">
          <input {...register('country',{required:{value:true,message:'Enter the country'}})} placeholder='Country:' type="text" />
          <div>{errors.country && <p className='text-red'>{errors.country.message}</p> }</div>
        </div>
         <textarea {...register('message')} placeholder='Message/Suggestion'></textarea>
       
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

export default Placeorder2