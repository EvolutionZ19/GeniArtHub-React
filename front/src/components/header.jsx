import React from 'react';
import logo from '/images/logo-black.png'; 
import { Link } from 'react-router-dom';
import logoPanier from '/images/cart.svg';



function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo GeniArtHub version sombre" />
                </Link>
                <a id="carticon" href="cart.html">
                    <img src={logoPanier} alt="Aller au panier" />
                </a>
            </div>
        </header>
    );
}
export default Header;
