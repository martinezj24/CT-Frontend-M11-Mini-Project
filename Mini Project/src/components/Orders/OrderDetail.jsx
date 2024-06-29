import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/orders/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.error('There was an error fetching the order details!', error);
      }
    };

    fetchOrder();
  }, [id]);

  if (!order) return null;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Order #{order.id}</Card.Title>
        <Card.Text>Customer ID: {order.customerId}</Card.Text>
        <Card.Text>Order Date: {order.orderDate}</Card.Text>
        <Card.Text>Products:</Card.Text>
        <ul>
          {order.products.map((product) => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default OrderDetail;
