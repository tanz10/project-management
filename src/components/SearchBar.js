import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchBar({ onSearch }) {
  return (
    <Search
      placeholder="Search by project name"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
}

export default SearchBar;
