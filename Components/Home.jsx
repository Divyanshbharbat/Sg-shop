import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';
import './Home.css';
import Dhani from '../dhaniaimg.jpeg';
import Mirchi from '../mirchiimg.webp';
import Haldi from '../haldiimg.jpeg';
import Homem from './homem.jpg';
import Haldim from './haldim.jpg';

gsap.registerPlugin(ScrollTrigger);

const Home = ({ sendcart }) => {
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You are not logged in! Redirecting to Signup page...');
      navigate('/signup');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear user token from localStorage
    alert('You have been logged out.');
    navigate('/signup'); // Redirect to Signup page
  };

  // Product details and states
  const products = [
    { id: 1, name: 'Mirchi', image: Mirchi, price: 100, quantity: 1 },
    { id: 2, name: 'Dhania', image: Dhani, price: 200, quantity: 1 },
    { id: 3, name: 'Haldi', image: Haldi, price: 300, quantity: 1 },
  ];

  const addtocart = (name, id, image, price, quantity) => {
    sendcart(name, id, image, price, quantity);
  };

  // Animation Refs
  const sections = useRef([]);
  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };
  // Animation Refs
  const sections2 = useRef([]);
  const addToRefs2 = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };
  // Animation Refs
  const sections3 = useRef([]);
  const addToRefs3 = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  // Initialize GSAP animations
  useEffect(() => {
    sections.current.forEach((section) => {
      gsap.from(section, {
        scale: 0,

        duration: 3,
        scrollTrigger: {
          trigger: section,
          scrub: 2,
        },
      });
    });
  }, []);
  // Initialize GSAP animations
  useEffect(() => {
    sections2.current.forEach((section) => {
      gsap.from(section, {
        scale: 0,
        transform: `translateX(${40}vh)`,
        duration: 3,
        scrollTrigger: {
          trigger: section,

          scrub: 2,
        },
      });
    });
  }, []);
  // Initialize GSAP animations
  useEffect(() => {
    sections3.current.forEach((section) => {
      gsap.from(section, {
        scale: 0,
      
        duration: 3,
        scrollTrigger: {
          trigger: section,
          scrub: 2,
        },
      });
    });
  }, []);

  return (
    <>
      <div id='main' className="main"></div>
      <div id='content' className="content">
        <marquee id="slid" className='slid' behavior="slider" direction="">
          <h1>
            Welcome from &nbsp; <span>S.G Traders</span>
          </h1>

        </marquee>
        <h3 id='h3' className='text-white px-5'>  Spice up your meals with the rich flavour and vibrant color of Mirchi Haldi & Dhania Powder -100% Pure,Natural and Full of Taste</h3>
      </div>
      <b>
            <h1>
              <u id='our'>Our Special Product</u>
            </h1>
          </b>
      <div className="body">
    
        <div ref={addToRefs3} id='one' className="left">
         
          <p>
            S.G. Traders proudly presents its special Mirchi Powder, crafted to bring the perfect balance of flavor and
            heat to your dishes. Made from carefully selected red chilies, our Mirchi Powder is processed using
            traditional methods to retain its natural aroma, vibrant color, and authentic taste. Whether you're spicing
            up your curries, marinades, or snacks, S.G. Traders' Mirchi Powder ensures a burst of bold flavor in every
            bite.
          </p>
        </div>
        <div className="right" id='two' ref={addToRefs}>
          <img src={Homem} alt="Special Mirchi Powder" height="80%" width="80%" />
        </div>
      </div>

     
        <b>
          <h1>
              <u id='famous'>Famous</u>
            </h1>
          </b>
          <div className="famous">
        <div className="right" id='three' ref={addToRefs}>
          <img src={Haldim} alt="Famous Haldi Powder" height="80%" width="80%" />
        </div>
        <div ref={addToRefs2} id='four' className="left">
         
          <p>
            S.G. Traders takes pride in offering its famous Haldi Powder, renowned for its exceptional quality and rich
            flavor. Sourced from the finest turmeric roots, our Haldi Powder is meticulously processed to retain its
            natural golden hue, earthy aroma, and potent health benefits.
          </p>
        </div>
      </div>

      <h1 id="h1" style={{fontSize:'8vh'}}>Top Products</h1>
      <div id='card' className="element">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            id={product.id}
            image={product.image}
            price={product.price}
            addtocart={addtocart}
            quantity={product.quantity}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
