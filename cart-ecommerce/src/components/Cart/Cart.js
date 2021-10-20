import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Garbage } from "../../assets/svg/garbage.svg";

import "./Cart.scss";

export default function Cart(props) {
  const { productsCart } = props;
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
        {productsCart.length > 0 ? (
          <CartFull onClick={openCart} />
        ) : (
          <CartEmpty onClick={openCart} />
        )}
      </Button>
      <div className="cart-content" style={{ width: widthCartContet }}>
        <CartContentHeader />
        Todos mis productos.....
      </div>
    </>
  );
}

function CartContentHeader(props) {
  const {} = props;

  return (
    <div className="cart-content__header">
      <div>
        <Close />
        <h2>Carrito</h2>
      </div>

      <Button variant="link">
        <Garbage />
      </Button>
    </div>
  );
}
