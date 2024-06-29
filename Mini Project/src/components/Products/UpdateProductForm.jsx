import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateProductForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        const { name, price } = response.data;
        setName(name);
        setPrice(price);
      } catch (error) {
        console.error('There was an error fetching the product details!', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/products/${id}`, { name, price });
      alert('Product updated successfully');
    } catch (error) {
      console.error('There was an error updating the product!', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </Form.Group>
      <Button variant="primary" type="submit">Update Product</Button>
    </Form>
  );
};

export default UpdateProductForm;

