import React from 'react';
import { DatePicker, Space, Radio } from 'bs-design';

const { RangePicker } = DatePicker;

const SetPlacementDemo = () => {
  const [placement, SetPlacement] = React.useState('topLeft');

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <DatePicker placement={placement} />
      <br />
      <br />
      <RangePicker placement={placement} />
    </>
  );
};

export default () => <SetPlacementDemo />;
