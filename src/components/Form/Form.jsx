import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Status from "../Status/Status";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Form = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus("error");
      setErrorMessage(
        `EmailJS configuration missing: ${!serviceId ? "Service ID " : ""}${
          !templateId ? "Template ID " : ""
        }${!publicKey ? "Public Key " : ""}`
      );
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        {
          publicKey: publicKey,
        }
      );

      console.log("SUCCESS!", result.text);
      setFormStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("FAILED...", error.text);
      setFormStatus("error");
      setErrorMessage(`Failed to send message: ${error.text || error.message}`);
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
    <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm text-secondary-default mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full px-3 py-2 rounded-md bg-primary-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="user_email"
            className="block text-sm text-secondary-default mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
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
          className=" button-outline w-full flex items-center justify-center rounded-8"
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
            message={errorMessage || "An error occurred. Please try again."}
            icon={<IoMdCloseCircle />}
            background={"bg-red-700"}
          />
        </div>
      )}
    </form>
  );
};

export default Form;
