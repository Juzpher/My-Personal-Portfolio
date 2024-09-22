import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const NotAvailable = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="default-container items-center  min-h-screen">
      <div className="text-center p-8 max-w-md">
        <FaGithub className="text-6xl mb-6 text-secondary-default mx-auto" />
        <h1 className="text-3xl font-bold mb-4 text-secondary-default">
          <span className="gradient-text">GitHub </span>Link Unavailable
        </h1>
        <p className="text-secondary-50 mb-6">
          The requested GitHub link is not available at this time.
        </p>
        <div className="flex justify-center">
          <button
            className="mt-4 button-gradient rounded-md"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotAvailable;
