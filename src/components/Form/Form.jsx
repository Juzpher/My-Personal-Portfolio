import React, { useState } from "react";

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
        <p className="mt-4 text-green-600">Message sent successfully!</p>
      )}
      {formStatus === "error" && (
        <p className="mt-4 text-red-600">
          An error occurred. Please try again.
        </p>
      )}
    </form>
  );
};

export default Form;
