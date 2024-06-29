import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/products', { name, price });
      alert('Product created successfully');
    } catch (error) {
      console.error('There was an error creating the product!', error);
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
      <Button variant="primary" type="submit">Create Product</Button>
    </Form>
  );
};

export default CreateProductForm;

