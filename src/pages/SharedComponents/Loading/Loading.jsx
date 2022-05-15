import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="text-center mt-5 pt-5">
      <FadeLoader color="rgb(70, 129, 104)" size={150} />
    </div>
  );
};

export default Loading;
