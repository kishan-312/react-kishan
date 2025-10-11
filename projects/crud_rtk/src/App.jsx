import React from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <div className="container my-5">
        <Form formTitle={"Registration Form"} />
        <Table />
      </div>
    </>
  );
};

export default App;
