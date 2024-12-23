import React from 'react'
import './About.css'
import image1  from './industry.jpg'
import image2  from './aboutimg.jpg'
import image3  from './about img3.jpg'
const About = () => {
    return (
        <>
            <div className="wrap">


                <div className="row1">
                    <div className="word">
                        <h1>Owner</h1>

                    </div>
                    <div className="pic">

                    </div>
                </div>



                <div className="row2">
                    <div className="pic">
                    <img src={image3} alt="" height='80%' width='100%' />
                    </div>
                    <div className="word">
                        <h1>our Vision</h1>
                        <h3>

                            Our vision is to become a trusted global leader in delivering premium, authentic, and sustainable spices that enrich lives with vibrant flavors. We aim to set benchmarks in quality and innovation, ensuring that every product reflects the richness of tradition and the purity of nature. By empowering farmers through fair trade practices and embracing eco-friendly processes, we aspire to contribute to a healthier, more sustainable world while bringing the authentic taste of spices to every household.</h3>
                        <h3>Our vision is to become a globally recognized leader in the spice industry, celebrated for delivering premium, authentic, and sustainably produced spices that bring vibrancy and flavor to kitchens around the world. We are committed to setting new standards in quality, innovation, and transparency, ensuring that every product we offer represents the rich heritage and purity of natural ingredients. Through strong partnerships with farmers, fair trade practices, and a focus on sustainable sourcing, we strive to uplift farming communities and preserve the environment for future generations. Our goal is to create a legacy of trust and excellence, enriching lives with the essence of tradition and the promise of health and well-being, while making the flavors of India a cherished part of every home, both locally and globally.</h3>
                    </div>
                </div>

                <div className="row3">
                    <div className="word">
                        <h1>our Approach</h1>
                        <h3>At SG Trader, we believe in a customer-first approach that integrates quality, sustainability, and innovation at every step of our operations. Our process begins with sourcing the finest raw materials directly from trusted farmers and suppliers, ensuring that only the freshest and purest ingredients make their way to our production facilities.

                            We emphasize stringent quality control measures at every stage, from procurement to packaging, to maintain the highest standards of safety, purity, and taste. Our commitment to sustainability drives us to adopt eco-friendly practices, including sustainable sourcing, energy-efficient production, and the use of recyclable packaging materials.

                            Collaboration is at the heart of our approach. We work closely with farming communities, empowering them with fair trade practices and technological support to improve yields and ensure consistent quality. Our innovative techniques and state-of-the-art machinery help us preserve the natural essence of spices while enhancing their flavor and longevity.

                            Through strong marketing strategies and a robust distribution network, we aim to make our products accessible to households and businesses locally and globally. With a focus on transparency, trust, and customer satisfaction, SG Trader is dedicated to enriching lives with authentic and flavorful spices while contributing to a healthier and more sustainable world.






                        </h3>

                    </div>
                    <div className="pic">
                    <img src={image2} alt=""  height='80%' width='100%' />
                    </div>
                </div>

                <div  className="row4">
                    <div className="pic">
                    <img src={image1} alt=""  height='30%' width='100%' />
                    </div>
                    <div className="word">
                        <h1 style={{fontSize:'6vh'}} >our Process</h1>
                        <h3>At SG Trader, our process is designed to deliver high-quality, authentic, and flavorful spices to our customers while maintaining a strong commitment to sustainability and excellence.

                        </h3>
                        <ul>
                            <li>
                                <h1>1. Sourcing the Best Ingredients
                                </h1>
                                <h3>We begin by partnering with trusted farmers and suppliers to procure the finest raw materials, including chili (mirchi), coriander (dhani), and turmeric (haldi). Our sourcing process emphasizes quality, freshness, and ethical trade practices to support farming communities and ensure premium ingredients.</h3>
                            </li>
                            <li>
                                <h1>2. Cleaning and Processing</h1>
                                <h3>The raw materials are thoroughly cleaned to remove impurities, dirt, and contaminants. Advanced cleaning techniques ensure that the spices are hygienic and ready for the next steps in production.</h3>
                            </li>
                            <li>
                                <h1>3. Drying and Grinding</h1>
                                <h3>The spices are carefully sun-dried or machine-dried to preserve their natural flavors and nutrients. We use state-of-the-art grinding machinery to produce fine powders with consistent texture and taste. This ensures that our products retain their vibrant colors, aromatic essence, and rich flavors.</h3>
                            </li>
                            <li>
                                <h1>4. Quality Control</h1>
                                <h3>Quality is our top priority. Each batch undergoes rigorous quality checks to meet the highest standards of purity, freshness, and taste. We conduct tests to ensure there are no artificial additives, fillers, or adulterants in our products.</h3>
                            </li>
                            <li>
                                <h1>5. Blending (Optional)</h1>
                                <h3>For custom spice blends, we carefully mix ingredients in precise proportions to create unique flavors that cater to diverse culinary needs</h3>
                            </li>
                            <li>
                                <h1>6. Packaging</h1>
                                <h3>Our spices are packed in airtight, tamper-proof, and eco-friendly packaging to preserve their freshness and ensure a long shelf life. We offer a variety of packaging sizes to cater to both individual consumers and bulk buyers.</h3>
                            </li>
                            <li>
                                <h1>7. Marketing and Branding
                                </h1>
                                <h3>We highlight our commitment to quality and authenticity through targeted marketing campaigns. By leveraging digital platforms, social media, and partnerships with distributors, we reach a wide audience, including households, restaurants, and retailers.</h3>
                            </li>
                            <li>
                                <h1>8. Distribution</h1>
                                <h3>Our robust supply chain ensures efficient delivery of products to customers locally and globally. We work with reliable logistics partners to guarantee timely and safe delivery of our spices.</h3>
                            </li>
                            <li>
                                <h1>9. Customer Feedback and Continuous Improvement</h1>
                                <h3>We value customer feedback as a cornerstone of our growth. By listening to our customers, we continuously refine our processes, innovate new products, and enhance our services to exceed expectations.</h3>
                            </li>
                            <li>
                                <h1>10. Commitment to Sustainability</h1>
                                <h3>Sustainability is at the core of our operations. From supporting eco-friendly farming practices to using recyclable materials, we are dedicated to reducing our environmental footprint while delivering top-quality spices.</h3>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>


        </>
    )
}

export default About