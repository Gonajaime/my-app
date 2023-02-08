import { useState } from "react";
import "./Counter.css";

export default function Counter(){

    const [count, setCount] = useState(0)
 const changeValue = () => {
    console.log(count + 1);
    setCount(count + 1);
 }

 const restValue = () => {
    console.log(count - 1);
    setCount(count - 1);
 }

 const multValue = () => {
    console.log(count *2);
    setCount(count *2);
 }

 const divValue = () => {
    console.log(count /2);
    setCount(count /2);
 }
    return <div>
        {count}
        <button className="c-CounterButton" onClick={changeValue}>+</button>
        <button className="c-CounterButton" onClick={restValue}>-</button>
        <button className="c-CounterButton" onClick={multValue}>*2</button>
        <button className="c-CounterButton" onClick={divValue}>/2</button>
    </div>
}