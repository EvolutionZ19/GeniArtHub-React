import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/home";
import ProductDetails from "./pages/productdetails";
// import { Cart } from "./pages/cart";



function App(){
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
         {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </Router>
  )
}

export default App;