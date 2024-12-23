import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
const Card = ({ name,id, image, price, addtocart ,quantity}) => {
  const [click, setclick] = useState(false)
  let navigate = useNavigate();
  return (
    <>
       <div className="card px-3 py-5 mx-3 bg-black text-white">
              <img src={image} className="card-img-top" alt="..." height="220vw" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
              
                <h4 className="card-title">{price}</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div onClick={() => {
                  if (!click) {
                    addtocart(name,id,image,price,quantity)
                    setclick(true)
                  }
                  else {
                    navigate('/addtocart')
                  }
                }
                } className="btn btn-primary bg-white text-black">
                  {click ? "View cart" : "Add To cart"}
                </div>
              </div>
            </div>


    </>
  )
}

export default Card