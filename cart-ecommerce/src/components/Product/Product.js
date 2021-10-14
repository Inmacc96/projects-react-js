import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { BASE_PATH } from "../../utils/constans";

import "./Product.scss";

export default function Product(props) {
  const { product } = props;

  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={`${BASE_PATH}/${product.image}`} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.extraInfo}</Card.Text>
          <Card.Text>{product.price} € / Unidad.</Card.Text>
          <Button>Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
