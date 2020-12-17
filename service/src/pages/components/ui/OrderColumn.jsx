import React from 'react';
import PropTypes from 'prop-types';
// import { axiosPatch } from '../../../../shared/helpers/api';
import Axios from 'axios';
import OrderItemCard from './OrderItemCard';
// import socket from '../../../shared/helpers/socket';

function OrderColumn({ sessionID, orderData }) {
  async function confirmOrder() {
    await Axios.patch(`/api/orders/confirm/${orderData.orderNo}`)
    .then(res => {
      console.log(res);
      // socket.confirmOrder(sessionID);
    })
    .catch(err => console.log(err));
  }

  const orderItems = orderData.items.map((itemData) => <OrderItemCard itemData={itemData} />);

  return (
    <div className="order-column">
      <h4>Order no: {orderData.orderNo}</h4>
      <p>status: {orderData.completed ? 'Completed' : 'On Request'}</p>
      {orderItems}
      <button type="button" onClick={confirmOrder}>
        Confirm order
      </button>
    </div>
  );
}

OrderColumn.propTypes = {
  sessionID: PropTypes.number,
  orderData: PropTypes.object,
};

export default OrderColumn;
