import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteDatas, setEditId, setInputs } from "../features/crud/crudSlice";

const Table = () => {
  const { datas } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  function handleClick(id) {
    //
    const confirmDelete = confirm("Are you sure you want to delete ?");

    if (confirmDelete) {
      dispatch(deleteDatas(id));
    }
    //
  }

  function handleEditClick(id, data) {
    //
    dispatch(setEditId(id));
    dispatch(setInputs(data));

    //
  }

  return (
    <>
      <table className="my-5 w-75 mx-auto table table-bordered text-center ">
        <thead>
          <tr>
            <th>Name </th>
            <th>Email </th>
            <th>Gender </th>
            <th>Hobbies </th>
            <th>Country </th>
            <th>Experience </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas.length > 0 ? (
            datas.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.hobbies.join(",")}</td>
                <td>{data.country}</td>
                <td>{data.experience}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      classname={"btn btn-danger"}
                      label={"Delete"}
                      type={"button"}
                      handleClick={() => handleClick(data.id)}
                    />
                    <Button
                      classname={"btn btn-success"}
                      label={"Edit"}
                      type={"button"}
                      handleClick={() => handleEditClick(data.id, data)}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}> data is not available </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
