import React, { memo } from 'react'

const Level3 = ({level,setLevel}) => {
    console.log("Level3 Component")
    return (
    <>
    <div className="w50 col flexAIC p1 linebottom linetop">
        <h3>Level-3</h3>
        <h4>Input of Level-1 = {level}</h4>
        <input type="text" className="line brd m3 p2" onChange={(e)=>setLevel(e.target.value)} />
    </div>
    </>
    
  )
}

export default memo(Level3)