import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        <div className="home__row">
          <Product
            id="123456789"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover"
            price={14.79}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5} />
          <Product
            id="234567891"
            title="ASUS VivoBook 15 Thin & Light Laptop, 15.6” FHD Display, AMD Quad Core R7-3700U CPU, 8GB DDR4 RAM, 512GB"
            price={1319.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SY355_.jpg"
            rating={5} />
        </div>
        <div className="home__row">
          <Product
            id="345678912"
            title="Simple Mobile Prepaid - Apple iPhone 11 Pro (64GB) - Midnight Green [Locked to Carrier – Simple Mobile]"
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81mxun%2B6pEL._AC_SX522_.jpg"
            rating={5} />
          <Product
            id="123456789"
            title="SAMSUNG 27-Inch G5 Odyssey Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, Black"
            price={269.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81cSdJuBbFL._AC_SX425_.jpg"
            rating={5} />
          <Product
            id="77886789"
            title="SAMSUNG 65-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa Built-in"
            price={1697.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61DIUfDxBtL._AC_SX450_.jpg"
            rating={5} />
        </div>
        <div className="home__row">
          <Product
            id="123456789"
            title="Samsung QN75Q60RAFXZA Flat 75 QLED 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility, 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility"
            price={1249.95}
            image="https://images-na.ssl-images-amazon.com/images/I/91FkgRREFHL._AC_SX450_.jpg"
            rating={5} />
        </div>
      </div>
    </div>
  )
}

export default Home
