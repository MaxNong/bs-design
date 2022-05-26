import React from 'react';
import { Input } from 'bs-design';

const { Search } = Input;

export default () => (
  <>
    <Search placeholder="input search loading default" loading />
    <br />
    <br />
    <Search
      placeholder="input search loading with enterButton"
      loading
      enterButton
    />
    <br />
    <br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      loading
    />
  </>
);
