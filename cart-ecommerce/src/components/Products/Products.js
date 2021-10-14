import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product";
import Loading from "../Loading";

import "./Products.scss";

export default function Products(props) {
  const {
    products: { result, loading, error },
  } = props;
  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Col>
            <Loading />
          </Col>
        ) : (
          result.map((product, index) => (
            <Product key={index} product={product} />
          ))
        )}
      </Row>
    </Container>
  );
}
