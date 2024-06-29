import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/customers/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error('There was an error fetching the customer details!', error);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/customers/${id}`);
      alert('Customer deleted successfully');
    } catch (error) {
      console.error('There was an error deleting the customer!', error);
    }
  };

  if (!customer) return null;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{customer.name}</Card.Title>
        <Card.Text>Email: {customer.email}</Card.Text>
        <Card.Text>Phone: {customer.phone}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomerDetail;
