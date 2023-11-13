import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { fetchProducts } from '../rtk/slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';

export default function Products() {
  const products = useSelector(state => state.products)
  const dispacth = useDispatch()
  useEffect(()=>{
      dispacth(fetchProducts())
    },[])
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="mx-auto my-5 cards">
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </Row>
    </Container>
  );
}
