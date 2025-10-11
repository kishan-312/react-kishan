import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/loadData/loadDataSlice";

const LoadData = () => {
  const { datas } = useSelector((state) => state.loadData);
  console.log(datas);
  const [loadData, setLoadData] = useState(false);

  const dispatch = useDispatch();
  const datasSlice = loadData ? datas : datas.slice(0, 6);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <div className="container my-4">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {datasSlice.map((data) => (
            <div
              className="p-4 border border-1 rounded text-center"
              key={data.id}
            >
              <span className="my-3">{data.category}</span>
              <div className="" style={{ height: "300px" }}>
                <img
                  src={data.image}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary mx-auto my-5 d-block"
          onClick={() => setLoadData(!loadData)}
        >
          {loadData ? "Show Less" : "show All Data"}
        </button>
      </div>
    </>
  );
};

export default LoadData;
