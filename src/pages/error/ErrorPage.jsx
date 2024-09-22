import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="default-container items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold small-caps text-center">
          Oops! I think you're lost.
        </h1>
        <div className="flex justify-center">
          <button
            className="mt-4 button-gradient rounded-md"
            onClick={() => navigate("/")}
          >
            Go back home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
