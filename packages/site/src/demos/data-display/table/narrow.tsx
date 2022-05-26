import React from 'react';
import { Table } from 'bs-design';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];

for (let i = 0; i < 200; i += 1) {
  data.push({
    key: i,
    name: 'Sample Name',
    age: 30 + (i % 5),
    address: `Sample Address ${i}`,
  });
}

export default () => (
  <div style={{ width: 300 }}>
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      pagination={{ defaultCurrent: 13 }}
    />
  </div>
);
