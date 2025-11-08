import React, { useState } from 'react'

function MultipleInputsSingleState() {

    const [formData, setFormData] = useState({ name: "", password: "" });

    function handleChange(e) {

        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

    }

    return (
        <>
            <form action="">
                <input type="text" placeholder='Enter Your Name' name='name' value={formData.name} onChange={handleChange} />
                <input type="text" placeholder='Enter Your Password' name='password' value={formData.password} onChange={handleChange} />
                <pre> {JSON.stringify(formData, null, 2)} </pre>
            </form>

        </>
    )
}

export default MultipleInputsSingleState