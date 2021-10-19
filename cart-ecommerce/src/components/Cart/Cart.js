import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";

import "./Cart.scss";

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContet = cartOpen ? 400 : 0;

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden"; //Cuando esté abierto el carrito no se puede hace scroll
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <Button variant="link" className="cart">
        <CartEmpty onClick={openCart} />
      </Button>
      <div className="cart-content" style={{ width: widthCartContet }}>
        Todos mis productos
      </div>
    </>
  );
}
