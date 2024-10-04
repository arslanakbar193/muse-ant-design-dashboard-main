import React, { useState } from 'react';
import { Table } from 'antd';
// import 'antd/dist/reset.css'; // Import the default Ant Design styles

const TeamStatistics = () => {
  // Team statistics data
  const dataSource = [
    { key: '1', agent: 'Kainat Siddiqui', viewings: 0, calls: 0, listings: 0, leads: 0, deals: 0 },
    { key: '2', agent: '2 2', viewings: 0, calls: 0, listings: 0, leads: 0, deals: 0 },
    { key: '3', agent: '3 3', viewings: 0, calls: 0, listings: 0, leads: 0, deals: 0 },
    { key: '4', agent: 'Abbas Ali', viewings: 0, calls: 0, listings: 0, leads: 2, deals: 2 },
    { key: '5', agent: 'Abdullah Rehmatullah', viewings: 0, calls: 0, listings: 0, leads: 1, deals: 0 },
    { key: '6', agent: 'Adel Flash', viewings: 0, calls: 0, listings: 1, leads: 0, deals: 0 },
    // Add more data as needed
  ];

  // Define table columns
  const columns = [
    { title: 'Agent', dataIndex: 'agent', key: 'agent' },
    { title: 'No of Viewings', dataIndex: 'viewings', key: 'viewings' },
    { title: 'Calls', dataIndex: 'calls', key: 'calls' },
    { title: 'New Listings', dataIndex: 'listings', key: 'listings' },
    { title: 'Leads', dataIndex: 'leads', key: 'leads' },
    { title: 'Deals', dataIndex: 'deals', key: 'deals' },
  ];

  // Pagination configuration
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}
      onChange={handleTableChange}
      bordered
      title={() => 'Team Statistics'}
    />
  );
};

export default TeamStatistics;