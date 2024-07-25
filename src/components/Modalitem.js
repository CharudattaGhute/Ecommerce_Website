import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modalitem({ cart = [], setCart }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = (prodId) => {
    const updatedCart = cart.filter((item) => item.prodId !== prodId);
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <span variant="primary" onClick={handleShow} style={{ color: "brown" }}>
        CART
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div
                  key={item.prodId}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5>{item.prodName}</h5>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRemove(item.prodId)}
                  >
                    ❌
                  </button>
                </div>
              ))}
              <hr />
              <h5>Total Amount: ${totalAmount.toFixed(2)}</h5>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalitem;
