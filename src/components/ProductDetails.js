import React from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";

const ProductDetails = ({ data = [], addToCart }) => {
  const { prodId } = useParams();
  const product = data.find((item) => item.prodId === parseInt(prodId));

  if (!product) {
    return (
      <div
        className="container"
        style={{ marginTop: "20%", marginLeft: "800px" }}
      >
        Product not found
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            className="image-fluid"
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
          <div className="container">
            <div className="row">
              <div className="col ml-5" style={{ marginLeft: "240px" }}>
                <Link to="storage">
                  <span type="button">Storage</span>
                </Link>
                <Link to="color" style={{ marginLeft: "20px" }}>
                  <span type="button">Color</span>
                </Link>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/storage" element={<Storage />} />
        {/* <Route path="/color" element={<Color />} /> */}
      </Routes>
    </div>
  );
};

function Storage() {
  return (
    <div className="container">
      <ul>
        <li>180</li>
        <li>256</li>
        <li>1 TB</li>
      </ul>
    </div>
  );
}

export default ProductDetails;
