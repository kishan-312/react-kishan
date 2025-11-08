import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1);
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Add 5</button>
        </div>
    );
}
