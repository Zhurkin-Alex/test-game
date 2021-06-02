import React from 'react';



function Cell({cell,  checkedBufer}) {
    
  return (
    <>
    {cell.status==='closed' ? <div className="cell" onClick={()=>{ checkedBufer(cell)}} style={{width:'75px',  visibility:cell.status==='hidden'?'hidden':'visible', height:'75px', margin:'10px', backgroundColor:cell.color2}}>
    </div> :  <div className="cell"  style={{width:'75px' ,visibility:cell.status==='hidden'?'hidden':'visible',  height:'75px', margin:'10px', backgroundColor:cell.color}}>
    </div> 
     } 
    </>
  );
}

export default Cell;
