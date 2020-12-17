import React, { useEffect, useState } from 'react';
// import { axiosGet } from '../../shared/helpers/api';
import Axios from 'axios';
import socket from '../shared/helpers/socket';
import TableCard from './components/ui/TableCard';
import TableModal from './components/TableModal';
import Table from './Table';

function Dashboard() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [expandedTable, setExpandedTable] = useState('');
  let tables = '';
  async function getRestaurantData() {
    // const res = await axios.get('/api/tables')
    await Axios.get('/api/tables')
    .then(res => {
      setRestaurantData(res.data.tables);
    })
    .catch(err => console.log(err));
  }

  // function receiveOrder() {
  //   return socket.receive('order', () => {
  //     getRestaurantData();
  //   });
  // }

  if (restaurantData) {
    tables = restaurantData.map((tableData) => (
      <TableCard
        tableData={tableData}
        key={tableData._id}
        getRestaurantData={getRestaurantData}
        setExpandedTable={setExpandedTable}
      />
    ));
  }
  console.log(restaurantData);

  useEffect(() => {
    getRestaurantData();
    // receiveOrder();
  }, []);

  if (expandedTable && restaurantData) {
    return <Table tableData={restaurantData[expandedTable - 1]} expandedTable={expandedTable} getRestaurantData={getRestaurantData()} />;
  }
  return <div className="container"><div className="tables-container">{tables}</div></div>;
}

export default Dashboard;
