import { useState } from "react";

function Counter(){
    let [count , setCount] = useState(0);

   
    function IncreaseCount(){
        
        setCount(count+1);
        console.log(count)
    }
    return(
        <>
          <p>count = {count}</p>
          <button onClick={IncreaseCount}>Increase Counter</button>
        </>
    )
}

export default Counter