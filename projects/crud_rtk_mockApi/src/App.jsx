import { useEffect, useState } from "react";
import {
  addUsers,
  deleteUser,
  editUser,
  fetchUsers,
} from "./features/crud/crudSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { datas } = useSelector((state) => state.crud);

  const initialUsers = {
    name: "",
    email: "",
    password: "",
  };

  const [users, setUsers] = useState(initialUsers);
  const [editId, setEditId] = useState(null);
  function resetForm() {
    setUsers(initialUsers);
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setUsers((prev) => ({ ...prev, [name]: value }));
  }

  function handleEdit(id, data) {
    console.log(id);
    console.log(data);
    setUsers(data);
    setEditId(id);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      await dispatch(editUser({ id: editId, data: users }));
      await dispatch(fetchUsers());
      setEditId(null);
    } else {
      await dispatch(addUsers(users));
      await dispatch(fetchUsers());
    }

    resetForm();
  }

  async function handleDelete(id) {
    console.log(id);
    await dispatch(deleteUser(id));
    await dispatch(fetchUsers());
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="container my-4">
        <form action="" className="form w-50 mx-auto" onSubmit={handleSubmit}>
          <h1 className=" text-center mb-4">Registration Form</h1>
          <div className="d-flex flex-column gap-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={users.name}
              onChange={handleChange}
            />
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              value={users.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your password"
              name="password"
              value={users.password}
              onChange={handleChange}
            />
            <button className=" btn btn-primary">Submit</button>
          </div>
        </form>

        <table className=" table table-bordered my-4 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {datas.length > 0 ? (
              datas.map((data) => (
                <tr key={data.id}>
                  <td>{data.name} </td>
                  <td>{data.email} </td>
                  <td>{data.password} </td>
                  <td>
                    <div className="d-flex gap-2 align-items-center justify-content-center">
                      <button
                        onClick={() => handleDelete(data.id)}
                        className=" btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdit(data.id, data)}
                        className=" btn btn-success"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}> {"Data is not available"} </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
