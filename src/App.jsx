import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route exact path= "/" element= {<Home />}/>;
        <Route exact path= "/catalogue" element={<ItemListContainer/>}/>;
        <Route exact path= "/category/:category" element={<ItemListContainer/>}/>;
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>;
        <Route exact path="/cart" element={<Cart/>}/>;
      </Routes>
      
      <Footer/>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
