import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";


function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [id]);
    
    return (
        <>
        <Header />
        <section className="productdetails">
            <div className="row">
            <div className="col-2">
                <img src={product.image} alt={product.shorttitle} />
            </div>
            <div className="col-2">
                <h1>{product.titre}</h1>
                <h4>{product.shorttitle}</h4>
                <p>{product.description}</p>
                <p>{product.price} €</p>
                <Link to="#" className="btn">
                Ajouter au panier
                </Link>
            </div>
            </div>
        </section>
        <Footer />
        </>
    );
    }

export default ProductDetails;