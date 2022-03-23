import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  // [
  //   'Juan',
  //   setState('Enrique')
  // ]

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <input 
    className="TodoSearch"
     placeholder="Cebolla" 
     value={searchValue}
    onChange={onSearchValueChange}/>
  );
}

export { TodoSearch };
