import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './App.css'
import Addtocart from './Components/Addtocart'
import Placeorder2 from './Components/Placeorder2'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import About from './Components/About'
import Services from './Components/Services'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const App = () => {
  const [cart2, setcart2] = useState([]);
 const [total,settotal]=useState(0)
let addtotal=(totalPrice)=>
{
   settotal(totalPrice)
}
 
let sendcart=(name,id,image,price,quantity)=>
{
   let r={name,id,image,price,quantity}
    setcart2([...cart2,r,]);
    
}

  const router=createBrowserRouter([
    {
      path:"/",
      element:<>
      <Navbar cart2={cart2.length} />
      <Home sendcart={sendcart}/>
    <Footer/>
      
      </>
    },{
path:"/about",
element:<>
<Navbar cart2={cart2.length}  />
<About/>
<Footer/>
</>



    },{

 path:"/signup",
 element:<>
<Signup/>
 </>

    },{
      path:"/login",
      element:<>
  <Login/>
      </>
    },{
path:"/contact",
element:<>
<Navbar cart2={cart2.length} />
<Contact/>
<Footer/>

</>
    },{
      path:'/services',
      element:<>
      <Navbar cart2={cart2.length}/>
      <Services/>
      <Footer/>
      </>
    },
    {
      path:'/addtocart',
      element:<>
       <Navbar cart2={cart2.length}/>
< Addtocart addtotal={addtotal} cart2={cart2} setcart2={setcart2}/>
       <Footer/>
      </>
    },
    {
      path:"/placeorder",
      element:<>
      <Navbar cart2={cart2.length}/>
      <Placeorder2 total={total} cart2={cart2} />
      <Footer/>
      </>
    }
  ])
  return (
  <>
 <RouterProvider router={router} />
  
  </>
  )
}

export default App