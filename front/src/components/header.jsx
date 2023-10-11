import React from 'react';
import logo from '/images/logo-black.png'; 
import { Link } from 'react-router-dom';
import logoPanier from '/images/cart.svg';

function Header() {
    return (
        <header>
            <section id="aiartshop" className="productlist">
                <div>
                    <img src={logo} alt="Logo GeniArtHub version sombre" />
                    <Link href="cart.html"><img src={logoPanier} alt="Aller au panier" /></Link>
                </div>
            </section>
        </header>
    );
}

export default Header;
