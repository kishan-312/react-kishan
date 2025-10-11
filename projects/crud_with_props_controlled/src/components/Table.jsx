import React from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Table = ({
  datas,
  handleDelete,
  handleEdit,
  setSortKey,
  setSortOrder,
}) => {
  return (
    <>
      <table className="table table-bordered text-center my-4 mx-auto w-75">
        <thead>
          <tr>
            <th>
              <div className=" d-flex gap-2 justify-content-center">
                <span>Name</span>
                <div>
                  <BsArrowUp
                    className="arrow"
                    onClick={() => {
                      setSortKey("name");
                      setSortOrder("asc");
                    }}
                  />
                  <BsArrowDown
                    className="arrow"
                    onClick={() => {
                      setSortKey("name");
                      setSortOrder("desc");
                    }}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className=" d-flex gap-2 justify-content-center">
                <span>Email</span>
                <div>
                  <BsArrowUp
                    className="arrow"
                    onClick={() => {
                      setSortKey("email");
                      setSortOrder("asc");
                    }}
                  />
                  <BsArrowDown
                    className="arrow"
                    onClick={() => {
                      setSortKey("email");
                      setSortOrder("desc");
                    }}
                  />
                </div>
              </div>
            </th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Country</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>{data.hobbies.join(" , ")}</td>
              <td>{data.country}</td>
              <td>{data.experience}</td>
              <td>
                <div className=" d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => handleEdit(data.id, data)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
