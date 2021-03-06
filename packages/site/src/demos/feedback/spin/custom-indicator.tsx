import React from 'react';
import { Spin } from 'bs-design';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default () => <Spin indicator={antIcon} />;
