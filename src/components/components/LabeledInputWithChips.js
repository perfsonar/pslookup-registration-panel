import React from "react";
import { useState } from 'react';

export default function LabeledInputWithChips({ label, id, placeholder }) {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!chips.includes(inputValue.trim())) {
        setChips([...chips, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeChip = (chipToRemove) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  };

  return (
    <div className="InputGroup">
      <label htmlFor={id} className="InputLabel">{label}</label>
      <input
        id={id}
        className="InputBox"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="ChipContainer">
        {chips.map((chip, index) => (
          <div className="Chip" key={index}>
            <span>{chip}</span>
            <button className="ChipClose" onClick={() => removeChip(chip)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
