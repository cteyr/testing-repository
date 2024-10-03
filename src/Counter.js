import { useState } from "react";

function Counter() {

    const [suma, setSuma] = useState(0)

    const handleClick = () => {
        setSuma(suma+1);
    }

   return (
    <div className="App">
      <h1>Count: {suma}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
    );
}

export default Counter;
