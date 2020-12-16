import React, { useState, useEffect } from 'react';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { axiosGet } from '../../shared/helpers/api';
import OrderCard from './components/OrderCard';
import FAIcon from '../../shared/components/FAIcon';

function Dashboard() {
  const [orders, setOrders] = useState([]);

  async function getAllOrders() {
    const res = await axiosGet('/api/orders/active');
    const curOrders = res.orders.filter(
      (el) => el.status === 'Confirmed' || el.status === 'Preparing'
    );
    // console.log('curOrders:', curOrders);
    const arr = [];
    curOrders.forEach((el) => {
      el.items.forEach((item) => {
        if (item.progress === 'Confirmed' || item.progress === 'Preparing') {
          const obj = {
            orderId: el._id,
            item,
          };
          arr.push(obj);
        }
      });
    });
    setOrders(arr);
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  const orderCards = orders.map((el, i) => (
    <OrderCard item={el.item} key={i} orderId={el.orderId} getAllOrders={getAllOrders} />
  ));

  return (
    <div className="kitchen-container">
      <div className="crew-title">
        <FAIcon icon={faTasks} divClass="icon" />
        <h1>Orders</h1>
      </div>
      <div className="flexbox">{orderCards}</div>
    </div>
  );
}

export default Dashboard;
