import React from 'react';
import { Rate } from 'eh-design';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export default () => (
  <>
    <Rate defaultValue={2} character={({ index }) => index + 1} />
    <br />
    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
  </>
);
