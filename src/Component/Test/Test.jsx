import React from "react";
import { useState } from "react";

const Test = () => {
  const [show, setShow] = useState(0);
  const change = (index) => {
    console.log(index);
    setShow(index);
  };
  return (
    <>
      <div className="flex justify-center mt-2">
        <button
          className=" p-2 bg-red-500 rounded-2xl m-2"
          onClick={() => change(0)}
        >
          Click 1
        </button>
        <button
          className=" p-2 bg-red-500 rounded-2xl m-2"
          onClick={() => change(1)}
        >
          Click 2
        </button>
      </div>

      {show === 0 ? <div>Arjun</div> : <div>Chaudhary</div>}
    </>
  );
};

export default Test;
