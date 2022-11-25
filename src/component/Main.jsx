import React, { useCallback, useState } from 'react'
import Level1 from './ callBack/Level1'
import Level2 from './ callBack/Level2'
import Level3 from './ callBack/Level3'

const Main = () => {
  const [level1, setLevel1] = useState(0)
  const [level2, setLevel2] = useState(0)
  const [level3, setLevel3] = useState(0)

  // call back for first one
  const level2Piker = useCallback((val) => {
    setLevel2(val)
  }, [level2])

  // call back for second one
  const level3Piker = useCallback((val) => {
    setLevel3(val)
  }, [level3])

  // call back for third one
  const level1Piker = useCallback((val) => {
    setLevel1(val)
  }, [level1])

  //  log for check reRederning
  console.log("Main Component")

  return (
    <div className="full col flexAIC">
      <Level1 level={level1} setLevel={level2Piker} />
      <Level2 level={level2} setLevel={level3Piker} />
      <Level3 level={level3} setLevel={level1Piker} />
    </div>
  )
}

export default Main