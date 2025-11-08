import React, { useRef, useState } from 'react'

function App() {

  const formRef = useRef();
  const [formDatas, setFormDatas] = useState(null)

  function handleSubmit(e) {

    e.preventDefault();

    const data = new FormData(formRef.current);
    

    const formValues = {

      name: data.get("name"),
      email: data.get("email"),
      age: data.get("age"),
      gender: data.get("gender"),
      role: data.get("role"),
      skills: data.getAll("skills"),
      agree: data.get("agree") ? true : false,
      bio: data.get("bio"),
      profile: data.get("profile")


    }


    setFormDatas(formValues)



  }

  console.log(formDatas);


  return (
    <>

      <form ref={formRef} onSubmit={handleSubmit}  >
        <h2>Uncontrolled Form</h2>

        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <input name="age" type="number" placeholder="Age" />

        <select name="gender"><option value="">Gender</option><option value="male">Male</option><option value="female">Female</option></select>

        <label><input type="radio" name="role" value="student" /> Student</label>
        <label><input type="radio" name="role" value="developer" /> Developer</label>

        <label><input type="checkbox" name="skills" value="html" /> HTML</label>
        <label><input type="checkbox" name="skills" value="css" /> CSS</label>
        <label><input type="checkbox" name="skills" value="js" /> JavaScript</label>

        <label><input type="checkbox" name="agree" /> I Agree</label>

        <textarea name="bio" placeholder="Bio" />

        <input type="file" name="profile" />

        <button>Submit</button>
      </form>
    </>
  )
}

export default App