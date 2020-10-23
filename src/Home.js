import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://expertdesign.cc/amazon-images/prime-video-bg.jpg" alt="" />
        <div className="home__row">
        <Product
            id="77886789"
            title="SAMSUNG 65-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa"
            price={1697.99}
            image="https://expertdesign.cc/amazon-images/samsung-monitor2.jpg"
            rating={5} />
          <Product
            id="123456789"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically"
            price={14.79}
            image="https://expertdesign.cc/amazon-images/the-lean-startup.jpg"
            rating={5} />
          <Product
            id="234567891"
            title="ASUS VivoBook 15 Thin & Light Laptop, 15.6” FHD Display, AMD Quad Core R7-3700U CPU, 8GB DDR4 RAM, 512GB"
            price={1319.99}
            image="https://expertdesign.cc/amazon-images/laptop-asus.jpg"
            rating={4} />
        </div>
        <div className="home__row">
          <Product
            id="345678912"
            title="Simple Mobile Prepaid - Apple iPhone 11 Pro (64GB) - Midnight Green [Locked to Carrier – Simple Mobile]"
            price={999.99}
            image="https://expertdesign.cc/amazon-images/iphone11.jpg"
            rating={5} />
          <Product
            id="123456789"
            title="SAMSUNG 27-Inch G5 Odyssey Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, Black"
            price={269.99}
            image="https://expertdesign.cc/amazon-images/samsung-monitor1.jpg"
            rating={4} />
          <Product
            id="77886789"
            title="SAMSUNG 65-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa"
            price={1697.99}
            image="https://expertdesign.cc/amazon-images/samsung-monitor2.jpg"
            rating={5} />
        </div>
        <div className="home__row">
          <Product
            id="123456789"
            title="Samsung QN75Q60RAFXZA Flat 75 QLED 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility, 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility"
            price={1249.95}
            image="https://expertdesign.cc/amazon-images/samsung-smart-tv.jpg"
            rating={5} />
        </div>
      </div>
    </div>
  )
}

export default Home
