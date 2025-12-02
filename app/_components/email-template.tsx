import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        background: "#fafafa",
        maxWidth: "500px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>📬 New Message</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>

      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "#fff",
          borderRadius: "6px",
        }}
      >
        <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
      </div>

      <p style={{ fontSize: "12px", marginTop: "20px", color: "#555" }}>
        Sent from your portfolio contact form.
      </p>
    </div>
  );
}
