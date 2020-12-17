import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { axiosPatch } from '../../../shared/helpers/api';
import Axios from 'axios';
import socket from '../../../shared/helpers/socket';

function KitchenOrderCard({ item, orderId, getAllOrders }) {
  const [status, setStatus] = useState({ button: '', class: '' });

  async function updateProgress() {
    await Axios.patch(`/api/orders/items/${orderId}`, {
      itemId: item._id,
    })
      .then((res) => {
        console.log(res);
        getAllOrders();
        socket.transmit('order');
      })
      .catch((err) => console.log(err));
  }

  function setProgress() {
    if (item.progress === 'Confirmed') {
      setStatus({
        button: 'START',
        class: 'pink',
      });
    } else {
      setStatus({
        button: 'COMPLETE',
        class: 'green',
      });
    }
  }

  useEffect(() => {
    setProgress();
  }, []);

  return (
    <div className="sm-container">
      <div className="flexbox">
        <h3>{item.dish.name}</h3>
        <h3 className="pill">x{item.quantity}</h3>
      </div>
      <div className="flexbox btn-container">
        <button className={status.class} onClick={updateProgress} type="button">
          {status.button}
        </button>
        <div className="sm-container">
          <p>Status: {item.progress}</p>
        </div>
      </div>
    </div>
  );
}

KitchenOrderCard.propTypes = {
  item: PropTypes.object,
  orderId: PropTypes.string,
  getAllOrders: PropTypes.func,
};

export default KitchenOrderCard;
