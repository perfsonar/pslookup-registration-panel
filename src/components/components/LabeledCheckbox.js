
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
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGVjay1pY29uIGx1Y2lkZS1jaGVjayI+PHBhdGggZD0iTTIwIDYgOSAxN2wtNS01Ii8+PC9zdmc+" alt="" className="CheckmarkIcon" />
        )}
      </div>
      <span>{label}</span>
    </label>
  );
}

