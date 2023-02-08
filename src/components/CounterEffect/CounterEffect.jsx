import { useEffect, useState } from "react";

export default function CounterEffect() {
    const [count, setCount] = useState (0)  
    useEffect(() =>{  //se ejecuta cuando cambia count

    }, [count]);

    useEffect(() =>{  //como un ngOnInit
console.log("NgInit");
    }, []);

    useEffect(() =>{  //como un ngOnInit
return () =>{
    console.log("me destruyo");
}
    }, []);
    return <div>
    <button onClick={() => setCount(count + 1)}> +1 </button>
    </div>
}