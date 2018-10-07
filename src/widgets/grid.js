import React from 'react';
import './grid.css';

const Grid = (props) => {
  return (
    <div className='container'>
      {props.children}
   </div>
  );
}

export default Grid;