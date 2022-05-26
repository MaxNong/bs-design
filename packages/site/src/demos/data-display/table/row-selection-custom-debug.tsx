import React from 'react';
import { Table } from 'bs-design';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: i % 2 === 0 ? `Edward King ${i}` : 'Another Row',
  });
}

const App = () => {
  const rowSelection = {
    renderCell: (checked, record, index, node) => ({
      props: { rowSpan: index % 2 === 0 ? 2 : 0 },
      children: (
        <>
          {String(checked)}: {node}
        </>
      ),
    }),
  };
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default App;
