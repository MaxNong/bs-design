import React from 'react';
import { Button, Popconfirm } from 'bs-design';

const App = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(), 3000);
    });

  return (
    <Popconfirm
      title="Title"
      onConfirm={confirm}
      onVisibleChange={() => console.log('visible change')}
    >
      <Button type="primary">Open Popconfirm with Promise</Button>
    </Popconfirm>
  );
};

export default App;
