import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import Button from "./Button";

const Table = ({ options = [] }) => {
  const { datas, handleDelete, handleEdit } = useContext(FormContext);

  return (
    <>
      <table className=" table table-bordered mb-4 mt-2 text-center w-75 mx-auto ">
        <thead>
          <tr>
            {options?.map((ele) => (
              <th key={ele}>{ele.charAt(0).toUpperCase() + ele.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.length === 0 ? (
            <tr>
              <td colSpan={options.length}> No data available </td>
            </tr>
          ) : (
            datas.map((data, index) => (
              <tr key={data.id || index}>
                <td> {index + 1} </td>
                <td> {data.name} </td>
                <td> {data.email} </td>
                <td> {data.gender} </td>
                <td> {data.hobbies.join(" , ")} </td>
                <td> {data.country} </td>
                <td> {data.experience} </td>
                <td>
                  <div className=" d-flex justify-content-center gap-3">
                    <Button
                      btnColor={"btn-danger"}
                      btnText={"Delete"}
                      type={"button"}
                      onClick={() => handleDelete(data.id)}
                    />
                    <Button
                      btnColor={"btn-success"}
                      btnText={"Edit"}
                      type={"button"}
                      onClick={() => handleEdit(data.id, data)}
                    />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
