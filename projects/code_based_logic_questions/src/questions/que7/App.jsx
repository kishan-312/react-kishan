import { useState } from "react";

function App() {
    const [name, setName] = useState("Kishan");

    function updateName() {
        name = "Mistry";
        console.log(name);
    }

    return (
        <div>
            <p>{name}</p>
            <button onClick={updateName}>Change Name</button>
        </div>
    );
}

export default App

