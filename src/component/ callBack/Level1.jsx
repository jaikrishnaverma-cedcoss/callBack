import React, { memo } from 'react'

const Level1 = ({level,setLevel}) => {
    console.log("Level1 Component")
  return (
<>
<div className="w50 col flexAIC p1 linebottom linetop">
        <h3>Level-1</h3>
        <h4>Input of Level 2 = {level}</h4>
        <input type="text" className="line brd m3 p2" onChange={(e)=>setLevel(e.target.value)} />
    </div>
</>
  )
}

export default memo(Level1)