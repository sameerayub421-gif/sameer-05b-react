import React, {useEffect, useState } from 'react'

const UseEffectHook = () => {
const [count , setcount] = useState(0)

useEffect ( () => {
    console.log("UseEffectHook")
}, [count] )

  return (
    <>
    <div>
      <h1 className='text-2xl font-extrabold'>Count: {count}</h1>
      <button className='bg-blue-500' onClick={() => setcount (count + 1)}>add count</button>
      </div>
    </>
  )
}

export default UseEffectHook
