import {useState} from 'react'
import './Counter.css'
function Counter()
{
    let stock=10;
    let [counter,setCounter]=useState(0);
    return(
        <div className="pageWrapper">
        <h1>Counter app in React</h1>
       <div className="Wrapper">
        <button className="minus" disabled={counter===0} onClick={()=>{
            if(counter>0){
                    setCounter(counter-1)
            }
        }}>-</button>
        <p>{counter}</p>
        <button className="plus" disabled={counter===stock} onClick={()=>{
            if(counter<stock){
            setCounter(counter+1)
            }
        }}>+</button>
        <button className="reset" onClick={()=>{
            setCounter(0);
        }}>Reset</button>
       </div>
       </div>
    )
}
export default Counter;