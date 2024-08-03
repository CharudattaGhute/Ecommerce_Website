import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
import "./components/Theme.css";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Modalitem from "./components/Modalitem";

function App() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleregister = (username) => {
    setUsername(username);
    localStorage.setItem("username", username);
  };

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const handleRemove = (id) => {
    setCart((cart) => cart.find((prodId) => prodId !== id));
  };

  const Products = [
    {
      prodId: 1,
      prodName: "iphone11",
      proddes:
        "Sleek design, dual cameras, fast performance, long battery life",
      color: "White",
      price: 30000,
      image:
        "https://powermaccenter.com/cdn/shop/files/A012000x2000_a1b30c33-5929-4b64-91cf-a38c71656f8a.jpg?v=1691109975&width=1445",
    },
    {
      prodId: 2,
      prodName: "iphone12",
      proddes: "A14 Bionic chip, improved cameras, 5G support, Ceramic .",
      color: "Purple",
      price: 40000,
      image: "https://media.extra.com/i/aurora/100260270_100_01?fmt=auto&w=720",
    },
    {
      prodId: 3,
      prodName: "iphone13",
      proddes: "Advanced cameras, A15 Bionic chip, 5G, longer battery life.",
      color: "Green",
      price: 450000,
      image:
        "https://iplanet.one/cdn/shop/files/iPhone_13_Green_PDP_Image_Position-1A__GBEN.jpg?v=1691170460",
    },
    {
      prodId: 4,
      prodName: "iphone14",
      proddes: "Advanced cameras, A15 Bionic chip, 5G, longer battery life.",
      color: "blue",
      price: 50000,
      image:
        "https://www.maplestore.in/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN_43b0347b-c716-4297-b1d4-a15af53ad270_1445x.jpg?v=1701815316",
    },
    {
      prodId: 5,
      prodName: "iphone15",
      proddes: "Advanced cameras, A15 Bionic chip, 5G, longer battery life.",
      color: "Pink",
      price: 55000,
      image:
        "https://iplanet.one/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1695427946&width=1445",
    },
    {
      prodId: 6,
      prodName: "iphone15 pro",
      proddes: "Advanced cameras, A15 Bionic chip, 5G, longer battery life.",
      color: "Black",
      price: 60000,
      image:
        "https://iplanet.one/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1695435375",
    },
  ];

  return (
    <div>
      <Navbar count={cart} cart={cart} username={username} />
      <Modalitem cart={cart} handleRemove={handleRemove} />

      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route
          path="/register"
          element={<Register onRegister={handleregister} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={<Cart data={Products} addToCart={addToCart} />}
        />
        <Route
          path="/cart/:prodId/*"
          element={<ProductDetails data={Products} addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
