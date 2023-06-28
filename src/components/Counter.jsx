import { useState } from "react";

const Counter = () => {
    const[count, setCount] = useState(0)

    const countHandler1 = () => {
        setCount(count + 1 )
    };

    const countHandler2 = () => {
        setCount(count - 1 )
    };

    const countHandler3 = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={countHandler1}> Add </button>
            <button onClick={countHandler2}> Subtract </button>
            <button onClick={countHandler3}> Reset </button>
        </div>
    )
};

export default Counter;