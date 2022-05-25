import React from 'react';
import { Upload, Button } from 'eh-design';
import { UploadOutlined } from '@ant-design/icons';

export default () => (
  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <Button icon={<UploadOutlined />}>Upload Directory</Button>
  </Upload>
);
