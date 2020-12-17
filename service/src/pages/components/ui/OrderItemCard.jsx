import React from 'react';
import PropTypes from 'prop-types';

function OrderItemCard({itemData}) {
  return (
    <div className="order-item-card">
      <p>{itemData.dish.name}</p>
      <div className="quantity-progress">
        <p>x{itemData.quantity}</p>
        <p>{itemData.progress}</p>
      </div>
    </div>
  );
}

OrderItemCard.propTypes = {
  itemData: PropTypes.object,
};

export default OrderItemCard;
