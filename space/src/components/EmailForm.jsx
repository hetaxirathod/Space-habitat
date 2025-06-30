import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_lg0vb3v";
    const templateId = "template_p1i1o1p";
    const publicKey = "8CrfCM3KZf8pZyHQY";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Space Habitat",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setPopup({ show: true, message: "🚀 Message sent successfully!", type: "success" });
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setPopup({ show: true, message: "❌ Failed to send message.", type: "error" });
        setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="emailForm">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Email</button>
      </form>

      {popup.show && (
        <div className={`popup ${popup.type}`}>
          {popup.message}
        </div>
      )}
    </>
  );
};

export default EmailForm;
