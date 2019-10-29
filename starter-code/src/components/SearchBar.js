import React from 'react';

export function SearchBar({searchItems}) {
  return (
    <input
      onChange={searchItems}
      type="text"
      placeholder="Search.."
    ></input>
  );
}
