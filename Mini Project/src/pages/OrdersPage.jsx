import React from 'react';
import OrderForm from '../components/Orders/OrderForm';
import OrderDetail from '../components/Orders/OrderDetail';

const OrdersPage = () => {
  return (
    <div>
      <h2>Orders</h2>
      <OrderForm />
      <OrderDetail />
    </div>
  );
};

export default OrdersPage;
