import React from 'react'
import {usecounter}from '../store/counterstore'
function Counter() {
  const counter = usecounter((state)=>state.counter)
  const addvalue =usecounter((state)=>state.addcounter)
  const resetcouter = usecounter((state)=>state.resetvalue)
  const removevalue = usecounter((state)=>state.removecounter)


  return (
   <>
   <h1>counter</h1>
   counter:{counter}
   <button onClick={addvalue}>addvalue</button>
   <button onClick={removevalue}>removevalue</button>
   <button onClick={resetcouter}>reset</button>
   
   
   
   
   
   </>
  )
}

export default Counter