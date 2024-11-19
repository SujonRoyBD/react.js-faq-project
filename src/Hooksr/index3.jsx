import React, { useState } from 'react'

export default function Hooksr() {

    const [count, setCount] =useState(0)
    const handelInc =()=>{
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Count:{}</h1>
      <button onClick={handelInc}>Sujon</button>
    </div>
  )
}
