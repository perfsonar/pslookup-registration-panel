import React from "react";

export default function LabeledInput({ label, id, placeholder }) {
  return (
    <div className="InputGroup">
      <label className="InputLabel" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className="InputBox"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
