import React from 'react';
import { Select, Radio } from 'bs-design';

const { Option } = Select;

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
      <Select
        defaultValue="HangZhou"
        style={{ width: 120 }}
        dropdownMatchSelectWidth={false}
        placement={placement}
      >
        <Option value="HangZhou">HangZhou #310000</Option>
        <Option value="NingBo">NingBo #315000</Option>
        <Option value="WenZhou">WenZhou #325000</Option>
      </Select>
    </>
  );
};

export default () => <SetPlacementDemo />;
