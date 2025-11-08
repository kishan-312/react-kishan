import { useState } from "react";

function Example() {
    const [value, setValue] = useState({ count: 0 });

    function increase() {
        value.count = value.count + 1;
        setValue(value);
        console.log("value.count inside:", value.count);
    }

    return (
        <div>
            <p>{value.count}</p>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default Example