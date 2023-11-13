import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import {Button, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { clearFromCart, deleteFromCart } from '../rtk/slices/cart-slice';

export default function Cart() {
  const cartProducts = useSelector(state => state.cart)
  const dispacth = useDispatch()
  const totalPrice = cartProducts.reduce((acc,item)=>{
    return acc += item.price * item.qunatity;
  },0)
  return (
    <Container style={{ marginTop: "100px" }}>
      <div className="d-flex align-items-start">
        <h1 style={{ textAlign: "left", marginBottom: "30px" }}>
          Welcome to Cart
        </h1>
        <h5 className="total">Total:{totalPrice.toFixed(2)}$</h5>
        <Button onClick={() => dispacth(clearFromCart())} variant="primary">
          Clear Cart
        </Button>
      </div>
      <Row className="mx-auto  cards">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Img</th>
              <th>Price</th>
              <th>Quntatiy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{++index}</td>
                  <td>{product.title.slice(0, 30)}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "100px", height: "100px" }}
                    />{" "}
                  </td>
                  <td>{product.price}$</td>
                  <td>{product.qunatity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => dispacth(deleteFromCart(product.id))}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
