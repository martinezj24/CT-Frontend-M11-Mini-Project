import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const PlaceOrderForm = () => {
  const [products, setProducts] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/orders', {
        customerId,
        products: selectedProducts
      });
      alert('Order placed successfully');
    } catch (error) {
      console.error('There was an error placing the order!', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCustomerId">
        <Form.Label>Customer ID</Form.Label>
        <Form.Control type="text" placeholder="Enter customer ID" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formProducts">
        <Form.Label>Select Products</Form.Label>
        {products.map((product) => (
          <Form.Check
            type="checkbox"
            key={product.id}
            label={`${product.name} - $${product.price}`}
            value={product.id}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              setSelectedProducts((prev) =>
                e.target.checked ? [...prev, value] : prev.filter((id) => id !== value)
              );
            }}
          />
        ))}
      </Form.Group>
      <Button variant="primary" type="submit">Place Order</Button>
    </Form>
  );
};

export default PlaceOrderForm;
