import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Garbage } from "../../assets/svg/garbage.svg";
import { STORAGE_PRODUCTS_CART } from "../../utils/constants";

import "./Cart.scss";

export default function Cart(props) {
  const { productsCart, getProductsCart } = props;
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

  const emptyCart = () => {
    localStorage.removeItem(STORAGE_PRODUCTS_CART);
    getProductsCart();
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
        <CartContentHeader closeCart={closeCart} emptyCart={emptyCart} />
        Todos mis productos.....
      </div>
    </>
  );
}

function CartContentHeader(props) {
  const { closeCart, emptyCart } = props;

  return (
    <div className="cart-content__header">
      <div>
        <Close onClick={closeCart} />
        <h2>Carrito</h2>
      </div>

      <Button variant="link" onClick={emptyCart}>
        <Garbage />
      </Button>
    </div>
  );
}
