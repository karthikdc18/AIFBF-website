import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const NameContact = () => {
  return (
    <section
      id="contact"  // This is crucial for scrolling to this section
      style={{
        padding: "60px 20px",
        backgroundColor: "rgba(48, 63, 159, 0.1)",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#1E3A8A", marginBottom: "30px", fontSize: "2.5em", fontWeight: "bold" }}>Contact Us</h2>
      <div
        className="contact-buttons-container"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(48, 63, 159, 0.2)",
        }}
      >
        {/* Email Button */}
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            backgroundColor: "rgba(48, 63, 159, 0.8)",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => window.location.href = "mailto:info@aifbf.org"}
          role="button"
          aria-label="Email Us"
        >
          <FaEnvelope style={{ marginRight: "10px", color: "white" }} />
          <span style={{ color: "white", fontSize: "16px" }}>Email Us</span>
        </div>

        {/* Phone Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            backgroundColor: "rgba(48, 63, 159, 0.8)",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => window.location.href = "tel:+91 8792006430"}
          role="button"
          aria-label="Call Us"
        >
          <FaPhone style={{ marginRight: "10px", color: "white" }} />
          <span style={{ color: "white", fontSize: "16px" }}>Call Us</span>
        </div>
      </div>
    </section>
  );
};

export default NameContact;
