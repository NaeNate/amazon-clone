import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon Banner"
        ></img>

        <div className="home__row">
          <Product
            id="750506"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="888864"
            title="Gateron Blue's"
            price={36.99}
            image="https://m.media-amazon.com/images/I/31KxT8Q0WhL._AC_SL260_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="887374"
            title="Power Converter"
            price={14.95}
            image="https://m.media-amazon.com/images/I/41u1N-ILvLL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="381214"
            title="Gamer Headphones"
            price={47.99}
            image="https://m.media-amazon.com/images/I/41W-r3UBZ1L._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="918889"
            title="Spider-Man PS5"
            price={32.55}
            image="https://m.media-amazon.com/images/I/51vbVvgK0iL._AC_SY200_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="450302"
            title="Oculus Quest 2"
            price={149.99}
            image="https://m.media-amazon.com/images/I/4165XXB+dxL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
