import React from 'react';
import { Upload, Button } from 'eh-design';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

export default () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);
