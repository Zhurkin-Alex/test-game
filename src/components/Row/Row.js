import React from 'react';
import Cell from '../Cell/Cell'
function Row({row ,  checkedBufer}) {
  return (
    <div style={{display:"flex"}}>
      {row.map(el=> <Cell key={el.id}  cell={el}  checkedBufer={checkedBufer}/>)}
    </div>
  );
}

export default Row;
