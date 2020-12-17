import React from 'react';
import PropTypes from 'prop-types';
import OrderColumn from './components/ui/OrderColumn';

function Table({tableData, getRestaurantData}) {
  const {session} = tableData.session;

  const ordersRender = tableData.session.orders.map((orderData) => (
    <OrderColumn orderData={orderData} sessionID={session} getRestaurantData={getRestaurantData}/>
  ));

  return (
    <div className="container">
      <div className="table-page">
        <h3>Table {tableData.tableNo}</h3>
        <div className="orders-container">{ordersRender}</div>
      </div>
    </div>

  );
}

Table.propTypes = {
  tableData: PropTypes.object,
};

export default Table;
