import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { deleteData, setEdit } from "../features/crud/crudSlice";

const Table = ({ options = [] }) => {
  const { datas } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  function handleDelete(id) {
    console.log(id);
    dispatch(deleteData(id));
  }

  function handleEdit(id, data) {
    console.log(id, data);
    dispatch(setEdit({ id, data }));
  }

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
          {datas?.length === 0 ? (
            <tr>
              <td colSpan={options.length}> No Data Available </td>
            </tr>
          ) : (
            datas.map((ele, index) => (
              <tr key={ele.id}>
                <td> {index + 1} </td>
                <td> {ele.name} </td>
                <td> {ele.email} </td>
                <td> {ele.gender} </td>
                <td> {ele.hobbies.join(" , ")} </td>
                <td> {ele.country} </td>
                <td> {ele.experience} </td>
                <td>
                  <div className=" d-flex justify-content-center gap-2">
                    <Button
                      btnColor={"btn-danger"}
                      btnText={"Delete"}
                      type={"button"}
                      onClick={() => handleDelete(ele.id)}
                    />
                    <Button
                      btnColor={"btn-success"}
                      btnText={"Edit"}
                      type={"button"}
                      onClick={() => handleEdit(ele.id, ele)}
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
