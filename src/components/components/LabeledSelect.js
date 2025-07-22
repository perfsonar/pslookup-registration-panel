import React from "react";

export default function LabeledSelect({ label, id, options = [] }) {
  return (
    <div className="InputGroup">
      <label className="InputLabel" htmlFor={id}>
        {label}
      </label>
        <select id={id} className="InputBox">
            {options.map((opt, idx) => (
            <option key={idx} value={opt.value || opt}>
                {opt.label || opt}
            </option>
        ))}
        </select>
    </div>
  );
}
