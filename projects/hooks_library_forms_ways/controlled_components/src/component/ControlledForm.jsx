import React, { useState } from "react";

function ControlledForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        role: "",
        skills: [],
        agree: false,
        bio: "",
        profile: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "checkbox" && name === "skills") {
            const updatedSkills = checked
                ? [...formData.skills, value]
                : formData.skills.filter((skill) => skill !== value);

            setFormData({ ...formData, skills: updatedSkills });
        }
        else if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        }
        else if (type === "file") {
            setFormData({ ...formData, profile: files[0] });
        }
        else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();




        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("age", formData.age);
        data.append("gender", formData.gender);
        data.append("role", formData.role);
        data.append("bio", formData.bio);
        data.append("agree", formData.agree);

        formData.skills.forEach((skill) => data.append("skills[]", skill));

        if (formData.profile) data.append("profile", formData.profile);


        // const res = await fetch("http://localhost:5000/api/user", {
        //     method: "POST",
        //     body: data,
        // });

        // const result = await res.json();
        // console.log(result);
        // alert("Form Submitted Successfully ✅");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Controlled Form</h2>

            <input type="text" name="name" placeholder="Name"
                value={formData.name} onChange={handleChange} />

            <input type="email" name="email" placeholder="Email"
                value={formData.email} onChange={handleChange} />

            <input type="number" name="age" placeholder="Age"
                value={formData.age} onChange={handleChange} />

            <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label><input type="radio" name="role" value="student"
                checked={formData.role === "student"} onChange={handleChange} /> Student</label>

            <label><input type="radio" name="role" value="developer"
                checked={formData.role === "developer"} onChange={handleChange} /> Developer</label>

            <div>
                <label><input type="checkbox" name="skills" value="html"
                    checked={formData.skills.includes("html")} onChange={handleChange} /> HTML</label>

                <label><input type="checkbox" name="skills" value="css"
                    checked={formData.skills.includes("css")} onChange={handleChange} /> CSS</label>

                <label><input type="checkbox" name="skills" value="js"
                    checked={formData.skills.includes("js")} onChange={handleChange} /> JavaScript</label>
            </div>

            <label>
                <input type="checkbox" name="agree"
                    checked={formData.agree} onChange={handleChange} /> I agree Terms
            </label>

            <textarea name="bio" placeholder="Bio"
                value={formData.bio} onChange={handleChange} />

            <input type="file" name="profile" onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm;
