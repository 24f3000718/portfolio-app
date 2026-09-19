import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Queries.css";

function Queries() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact:"",
    query: ""
  });
  const [status, setStatus] = useState("");

  const Change = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const Submit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_rld8af9",
        "template_mclye7n",
        {
          name: formData.name,
          email: formData.email,
          contact:formData.contact,
          query: formData.query
        },
        "cCENfjiqK382GoxmW"
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", query: "" });
        alert("Thanks! Your message was sent.");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
        alert("Something went wrong — try again.");
      });
  };

  return (
    <div className="queries">
      <h1>Queries</h1>
      <p>Have a question? Feel free to reach out.</p>

      <form onSubmit={Submit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={Change}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={Change}
          required
        />
        <input
          type="contact"
          name="contact"
          placeholder="Enter your Contact No"
          value={formData.contact}
          onChange={Change}
          required
        />
        <textarea
          name="query"
          placeholder="Enter your query"
          value={formData.query}
          onChange={Change}
          required
        ></textarea>
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit"}
        </button>

      </form>
    </div>
  );
}

export default Queries;