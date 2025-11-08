import { useState } from "react";

function Demo() {
    const [num, setNum] = useState(10);

    function update() {
        setNum(num + 5);
        setNum(num + 10);
    }

    return (
        <div>
            <p>{num}</p>
            <button onClick={update}>Update</button>
        </div>
    );
}

export default Demo
