import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const TrackOrderStatus = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/orders/${id}/status`);
        setOrder(response.data);
      } catch (error) {
        console.error('There was an error fetching the order status!', error);
      }
    };

    fetchOrder();
  }, [id]);

  if (!order) return <div>Loading...</div>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Order Status for Order #{order.id}</Card.Title>
        <Card.Text>Order Date: {order.orderDate}</Card.Text>
        <Card.Text>Status: {order.status}</Card.Text>
        <Card.Text>Expected Delivery Date: {order.expectedDeliveryDate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TrackOrderStatus;

