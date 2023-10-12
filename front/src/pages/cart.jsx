import Footer from "../components/footer";
import Header from "../components/header";
import '../styles/cart.css';




function Cart(){
    document.body.classList.add("page");
    return(
        <>
            <Header />
    <section>
        <div className="row">
            <h1>Votre Panier</h1>
        </div>
    </section>

    <section id="cart" className="productlist">
        <div className="products">     
        </div>
    </section>
    <div id="panier">
       
    </div>

    <div className="cart-summary">
        <p>Total de la commande </p>
        <span id="total-articles">0 </span> articles pour un montant de <span id="total-amount"> 0€</span>
    </div>
    

    <section className="order-form">
        <h2>Formulaire de Commande</h2>
        <form id="orderForm">
            <div id="orderForm-grid">
                <div>
                    <label htmlFor="firstName">Prénom :</label>
                    <input type="text" id="firstName"   name="firstName"  required />
                </div>

                <div>
                    <label htmlFor="lastName">Nom :</label>
                    <input type="text" id="lastName"    name="lastName"    required />
                </div>
                <div>
                    <label htmlFor="address">Adresse :</label>
                    <input type="text" id="address" name="address"      required />
                </div>

                <div>
                    <label htmlFor="city">Ville :</label>
                    <input type="text" id="city" name="city" required />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email"     required />
                </div>
            </div>

           <div id="cart-div-submit"><button id="cart-submit" type="submit">Passer Commande</button></div> 
            
        </form>
    </section>

    {/* La modal */}
    <div className="modal" id="modal">
        <div className="modal-content">
            <p className="modal-message">Félicitations, votre commande a été passée avec succès.</p>
            <p>Voici votre numéro de commande : <span id="order-number"></span></p>
        </div>
    </div>
    

            <Footer />        

        </>
    )
};

export default Cart;