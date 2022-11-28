import { useState } from "react"
import { CounterAppWithCustomHook } from "./CounterAppWithCustomHook"

export const CounterApp = () => {
    const [{counter1 , counter2, counter3}, setCounter] = useState({
      counter1 : 10,
      counter2 : 20,
      counter3 : 30,
    })
    return (
        <>
        <CounterAppWithCustomHook/>
        </>
  )

}
