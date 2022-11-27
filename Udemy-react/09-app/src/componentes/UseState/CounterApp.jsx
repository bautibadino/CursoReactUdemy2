import { useState } from "react"

export const CounterApp = () => {
    const [counter, setCounter] = useState(0)
    
    return (
        <>
        
        <h1>Counter: {counter}</h1>
    
        <button onClick={ () => setCounter(counter + 1)}>+1</button>
        <button onClick={ () => setCounter(counter - 1)}>-1</button>

        
        </>
  )

}