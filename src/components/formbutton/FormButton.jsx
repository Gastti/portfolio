import React from "react";
import "./FormButton.css";
import CheckIcon from "@mui/icons-material/Check";

export default function FormButton({ children, loading, emailSent, onClick }) {
  return (
    <button
      onClick={loading ? null : onClick}
      className={`formbtn${loading ? " disabled" : ""}${
        emailSent ? " email-sent" : ""
      }`}
    >
      {(!loading && !emailSent) && children}
      {loading && <span className="formbtn-loading"></span>}
      {emailSent && <CheckIcon />}
    </button>
  );
}
