import { useState } from "react"
const Button = ()=>{
    const [counter, setCounter] = useState(0)
    const increment = ()=>{
        setCounter((prevCount)=>{
            return prevCount + 1
        })
    }
    const decrement = ()=>{
        setCounter((prevCount)=>{
           return prevCount  - 1
        })
    }
    return(
        <div>
            <button onClick={increment}>+</button>
            <p>{counter}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}


export default Button