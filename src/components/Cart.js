import React from "react";
import { Link } from "react-router-dom";

function Cart({ data, addToCart }) {
  return (
    <div>
      <div className="container mt-5" style={{ backgroundColor: "##116466" }}>
        <div className="row">
          {data.map((product) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-5"
              key={product.prodId}
              style={{ marginTop: "20px" }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  to={`/cart/${product.prodId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt="Product"
                    width={100}
                  />
                </Link>
                <div className="card-body">
                  <Link
                    to={`/cart/${product.prodId}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h5 className="card-title">{product.prodName}</h5>
                    <p className="card-text">{product.proddes}</p>
                    <h4 className="card-text">{product.color}</h4>
                    <h3 className="card-text">{product.price}</h3>
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                    style={{ marginTop: "10px" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
