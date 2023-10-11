import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import '../styles/styles.css';
import { Link } from 'react-router-dom';

function Home() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:3000/api/products/")
      .then(response => response.json())
      .then(data => setCardsData(data));
  }, []);

  return (
    <>
      <header>
        <div className="row">
          <Link to="/">
            <img src="/images/logo-white.png" alt="Logo du site GeniArtHub" />
          </Link>
        </div>
      </header>
      <section className="hero">
        <div className="row">
          <h1>Explorez l'AI-magination artistique</h1>
          <Link to="#aiartshop">AI Art Shop</Link>
        </div>
      </section>
      <section id="aiartshop" className="productlist">
        <div>
          <img src="/images/logo-black.png" alt="Logo GeniArtHub version sombre" />
          <Link to="/cart">
            <img src="/images/cart.svg" alt="Aller au panier" />
          </Link>
        </div>
        <section className="products">
        {cardsData.map(card => (
         <Card
            key={card._id}
            titre={card.titre}
            image={card.image}
            _id={card._id}
            shorttitle={card.shorttitle}

        />
    ))}

        </section>
      </section>
      <Footer />
    </>
  );
}

export default Home;
