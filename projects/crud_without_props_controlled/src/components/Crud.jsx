import { useEffect, useState } from "react"

const Crud = () => {


    const [users,setUsers] = useState({

        id : Date.now() ,
        name : "",
        email : "",
        password : "",
        gender : "" ,

    }) ;
    const [editId,setEditId] = useState(null)
    console.log(users,setUsers);
    const [datas,setDatas] = useState(() => {

        const stored = localStorage.getItem("datas") ;
        return JSON.parse(stored) || []

    } ) ;

    useEffect(() => {

        localStorage.setItem("datas", JSON.stringify(datas) )

    }, [datas] )
    

    function handleChange(e) {

        const { id,name,checked,value } = e.target
        console.log(id,name,checked,value);
        setUsers({...users,[name] : value})

    }

    function handleSubmit(e) {

        e.preventDefault() ;

        if(editId) {

            setDatas(prev => prev.map((data) => data.id === editId ? {...users, id : editId } :  data ))

        }

        else {

        setDatas([...datas, users ])

        }

        setUsers({name : "",
        email : "",
        password : "",
        gender : "" ,})

    }

    function handleDelete(id) {

        console.log(id);
        setDatas(datas.filter((data) => data.id !== id ))
        

    }

    function handleEdit(id) {

        const editUser = datas.find((data) => data.id === id );
        setUsers(editUser)
        setEditId(id);
        

    }
 
    console.log(users);
    console.log(datas);
    
    
  return (
    <div className="" >
        <h2 className="text-center" >Registration Form</h2>
          <form action="" className="border border-1 w-50 mx-auto p-4 d-flex flex-column gap-4" onSubmit={handleSubmit} >  
                <div>
                    <input type="text" value={users.name} name="name" className="form-control" onChange={handleChange} placeholder="Enter Your Name" />
                </div>
                <div>
                    <input type="email" value={users.email} name="email" className="form-control"  onChange={handleChange}  placeholder="Enter Your email" />
                </div>
                <div>
                    <input type="password" value={users.password} name="password" className="form-control" onChange={handleChange}  placeholder="Enter Your password" />
                </div>
                <div className=" d-flex gap-3 align-items-center" >
                  <div className="d-flex gap-2 align-items-center" >
                      <label className="form-check-label" htmlFor="male">Male</label>
                      <input className="form-check-input" checked={users.gender === "male"} onChange={handleChange} type="radio" id="male" name="gender" value={"male"}    />

                  </div>
                  <div className="d-flex gap-2 align-items-center">
                      <label className="form-check-label" htmlFor="female">Female</label>
                      <input className="form-check-input" checked={users.gender === "female"} onChange={handleChange} type="radio" id="female" name="gender" value={"female"}    />
                  </div>
                  <div className="d-flex gap-2 align-items-center" >
                      <label className="form-check-label" htmlFor="other">Other</label>
                      <input className="form-check-input" checked={users.gender === "other" } onChange={handleChange} type="radio" id="other" name="gender" value={"other"}   />
                  </div>
                </div>
                <div className="" >
                    <button className="btn btn-danger w-100" >Submit</button>
                </div>
          </form>

          {/* table */}

          <table className=" mx-auto w-50 table table-bordered mt-4 text-center" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {

                datas.map((data) =>  <tr key={data.id} >
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td>{data.gender}</td>
                    <td>
                        <div className="d-flex gap-3" >
                            <button className=" btn btn-danger" onClick={() => handleDelete(data.id) } >Delete</button>
                            <button className="btn btn-success" onClick={() => handleEdit(data.id) } >Edit</button>
                        </div>
                    </td>
                </tr> )

               }
            </tbody>
          </table>

    </div>
  )
}

export default Crud
