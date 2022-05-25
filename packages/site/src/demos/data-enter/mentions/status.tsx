import React from 'react';
import { Mentions, Space } from 'eh-design';

const { Option } = Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}

const MentionsStatuses = () => {
  const options = (
    <>
      <Option value="afc163">afc163</Option>
      <Option value="zombieJ">zombieJ</Option>
      <Option value="yesmeck">yesmeck</Option>
    </>
  );

  return (
    <Space direction="vertical">
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="error"
      >
        {options}
      </Mentions>
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="warning"
      >
        {options}
      </Mentions>
    </Space>
  );
};

export default () => <MentionsStatuses />;
