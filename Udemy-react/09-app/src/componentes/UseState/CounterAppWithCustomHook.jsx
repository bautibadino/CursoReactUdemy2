import React from 'react'
import {UseCounter} from '../hooks/UseCounter'

export const CounterAppWithCustomHook = () => {
  
  const {increment, decrement, reset, counter} = UseCounter()

  return (
    <>
    
    <div>counter with hook: {counter}</div>
    <button onClick={ () => increment(2)}>+1</button>
    <button onClick={ () => decrement(2)}>-1</button>
    <button onClick={reset}>Reset</button>

    </>
  )
}
