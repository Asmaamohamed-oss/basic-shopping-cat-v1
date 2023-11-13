import React from 'react'
import {Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from 'react-redux';
import { addToCart } from '../rtk/slices/cart-slice';

export default function Product({product}) {
    const {image,title,description,price} = product
    const dispacth = useDispatch()
    return (
        <Col className="col-12 col-md-4 my-2">
            <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{title.slice(0,20)}...</Card.Title>
                <Card.Text>{description.slice(0,30)}...</Card.Text>
                <Button variant="info" onClick={()=>dispacth(addToCart(product))}>Add To Cart</Button>
                <h6>Price:{price}$</h6>
            </Card.Body>
            </Card>
        </Col>
    );
}
