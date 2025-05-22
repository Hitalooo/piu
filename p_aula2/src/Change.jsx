import { useState } from "react";

export default function Change(){
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)
    let [clickNumber, setClickNumber] = useState(1);
    // let counter = 0

    function handleClick() {
        setCount2(count2 + clickNumber);         // soma o valor atual do clique
        setClickNumber(clickNumber + 1);         // incrementa para o próximo clique
    }
    return(
        
        <div>
            <button onClick={() => setCount(count + 1)}> click here</button>
            <h1>{count}</h1>

            <button onClick={handleClick}> click here</button>
            <h1>{count2}</h1>
        </div>

    ); 
}