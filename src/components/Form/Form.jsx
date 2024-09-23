import React, { useState, useEffect } from "react";
import Status from "../Status/Status";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Form = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.target);

    const endpoint = import.meta.env.VITE_GETFORM_ENDPOINT;
    console.log("Submitting to endpoint:", endpoint);

    if (!endpoint) {
      setFormStatus("error");
      setErrorMessage(
        "Endpoint not defined. Check your environment variables."
      );
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setErrorMessage(`Network error: ${error.message}`);
    }
  };

  useEffect(() => {
    if (formStatus === "success" || formStatus === "error") {
      const timer = setTimeout(() => {
        setFormStatus(null); // Reset status after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [formStatus]);

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Hidden input for your email */}
      <input type="hidden" name="email" value="jusphervergaraa09@gmail.com" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-secondary-default mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded-md bg-primary-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-secondary-default mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 rounded-md bg-primary-50"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm text-secondary-default mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          className="w-full px-3 py-2 rounded-md bg-primary-50"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className=" button-gradient flex items-center justify-center rounded-8"
          disabled={formStatus === "submitting"}
        >
          {formStatus === "submitting" ? "SENDING..." : "SEND"}
        </button>
      </div>

      {formStatus === "success" && (
        <div className="absolute my-2 justify-start">
          <Status
            message={"Message sent successfully!"}
            icon={<FaCheckCircle />}
            background={"bg-green-700"}
          />
        </div>
      )}
      {formStatus === "error" && (
        <div className="absolute my-2 justify-start">
          <Status
            message={"An error occurred. Please try again."}
            icon={<IoMdCloseCircle />}
            background={"bg-red-700"}
          />
        </div>
      )}
    </form>
  );
};

export default Form;
