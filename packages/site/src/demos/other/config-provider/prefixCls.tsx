import React, { useState } from 'react';
import { ConfigProvider, Select, Button } from 'bs-design';
import { SmileOutlined } from '@ant-design/icons';

// Ant Design site use `es` module for view
// but do not replace related lib `lib` with `es`
// which do not show correct in site.
// We may need do convert in site also.
const FormSizeDemo = () => {
  const [prefixCls, setPrefixCls] = useState('light');
  return (
    <div>
      <Button
        style={{ marginBottom: '12px' }}
        type="primary"
        onClick={() => setPrefixCls('dark')}
      >
        toggle prefixCls
      </Button>
      <div>
        <ConfigProvider prefixCls={prefixCls} iconPrefixCls="bamboo">
          <SmileOutlined />
          <Select />
        </ConfigProvider>
      </div>
    </div>
  );
};
export default () => <FormSizeDemo />;
