import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/styles.css";

function ProductDetails() {
    document.body.classList.add("page");
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [selectedFormat, setSelectedFormat] = useState("");
    const [displayedPrice, setDisplayedPrice] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);

                
                if (data.declinaisons && data.declinaisons.length > 0) {
                    const firstDeclinaison = data.declinaisons[0];
                    setDisplayedPrice(
                        firstDeclinaison.prix ? `${firstDeclinaison.prix} €` : "Prix non disponible"
                    );
                } else {
                    setDisplayedPrice(data.prix ? `${data.prix} €` : "Prix non disponible");
                }
            });
    }, [id]);

    const handleFormatChange = (e) => {
        const selectedFormat = e.target.value;
        setSelectedFormat(selectedFormat);

        const selectedDeclinaison = product.declinaisons.find(
            (declinaison) => declinaison.taille === selectedFormat
        );

        if (selectedDeclinaison) {
            setDisplayedPrice(selectedDeclinaison.prix ? `${selectedDeclinaison.prix} €` : "Prix non disponible");
        }
    };

    const handleAddToCart = () => {
        if (quantity >= 1 && selectedFormat) {
            const produit = {
                id: product._id,
                titre: product.titre,
                image: product.image,
                quantite: parseInt(quantity),
                format: selectedFormat,
                prix: displayedPrice,
            };

            // Faites ce que vous devez faire avec le produit sélectionné
        } else {
            alert("Veuillez sélectionner une quantité et un format valides.");
        }
    };

    return (
        <>
            <Header />
            <section className="detailoeuvre">
                <article>
                    <figure>
                        <img
                            id="image-oeuvre"
                            className="product-image"
                            src={product.image}
                            alt={product.shorttitle}
                        />
                    </figure>
                    <div>
                        <h1 className="product-title">{product.titre}</h1>
                        <p id="para">
                            {product?.description?.length > 207
                                ? product?.description?.slice(0, 207) + "..."
                                : product?.description}
                        </p>

                        <div className="price">
                            <p>Acheter pour</p>
                            <span className="showprice">{displayedPrice}</span>
                        </div>
                        <div className="declinaison">
                            <input
                                type="number"
                                name="quantity"
                                placeholder="1"
                                value={quantity}
                                min="1"
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <select
                                name="format"
                                id="format"
                                onChange={handleFormatChange}
                            >
                                {product.declinaisons &&
                                    product.declinaisons.map((declinaison, index) => (
                                        <option key={index} value={declinaison.taille}>
                                            {`Format : ${declinaison.taille}`}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <a className="button-buy" onClick={handleAddToCart}>
                            Acheter
                        </a>
                    </div>
                </article>

                <aside className="product-description">
                    <h2>Description de l’oeuvre : {product.titre}</h2>
                    <p>{product.description}</p>
                </aside>
            </section>

            <Footer />
        </>
    );
}

export default ProductDetails;
