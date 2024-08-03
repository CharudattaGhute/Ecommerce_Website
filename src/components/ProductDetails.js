import React from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";

const ProductDetails = ({ data = [], addToCart }) => {
  const { prodId } = useParams();
  const product = data.find((item) => item.prodId === parseInt(prodId));

  if (!product) {
    return (
      <div
        className="container"
        style={{ marginTop: "20%", textAlign: "center" }}
      >
        Product not found
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{ marginTop: "5%" }}>
          <img
            className="img-fluid"
            src={product.image}
            alt="Product"
            width={700}
          />
        </div>
        <div className="col-md-6" style={{ marginTop: "10%" }}>
          <h5>{product.prodName}</h5>
          <p>{product.proddes}</p>
          <h4>{product.color}</h4>
          <h3>{product.price}</h3>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <div className="mt-4">
            <Link to="storage" className="btn btn-link">
              Storage
            </Link>
            <Link
              to="color"
              className="btn btn-link"
              style={{ marginLeft: "20px" }}
            >
              Color
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="storage" element={<Storage />} />
        <Route path="color" element={<Color />} />
      </Routes>
    </div>
  );
};

function Storage() {
  return (
    <div
      className="container"
      style={{
        border: "1px solid black",
        width: "200px",
        margin: "auto",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <ul>
        <li>180</li>
        <li>256</li>
        <li>1 TB</li>
      </ul>
    </div>
  );
}

function Color() {
  return (
    <div
      className="container"
      style={{
        border: "1px solid black",
        width: "200px",
        margin: "auto",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <ul>
        <li>Red</li>
        <li>Blue</li>
        <li>Green</li>
      </ul>
    </div>
  );
}

export default ProductDetails;
