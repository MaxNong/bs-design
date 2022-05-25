import React from 'react';
import { Select } from 'eh-design';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}

export default () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
);
