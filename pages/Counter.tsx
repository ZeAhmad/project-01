import { useState , useEffect } from "react";
const Counter = () => {
   
    var [counter,setCounter] = useState<number>(0);

    useEffect(()=> {
        console.log("first use effect")
        return (() => console.log("unmonted"))
    },[]
    
    )

    useEffect( ()=> {
        console.log("counter is updated")
    },[counter])

    const increment = (): void => { 
        setCounter (counter + 1)
        console.log("counter value is "+ counter)
        }
   
    const decrement = (): void => { 
        setCounter (!counter? counter: counter - 1) 
        console.log("counter value is "+ counter)
    }
   
    
    return (
     <>
        <h1>Counter App</h1>
        <button onClick={increment}>Increment</button> 
        <br/>
        {counter}
        <br/>
        <button onClick={decrement}>Decrement</button>
    </>
        )
}
export default Counter