
import React from "react";

export default function LabeledCheckbox({ id, label, checked, onChange }) {
  return (
    <label htmlFor={id} className="CheckboxLabel">
      <div className="CheckboxWrapper">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="Checkbox"
        />
        {checked && (
          <img src="/icons/check.svg" alt="" className="CheckmarkIcon" />
        )}
      </div>
      <span>{label}</span>
    </label>
  );
}

