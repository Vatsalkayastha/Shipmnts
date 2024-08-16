import React, { useState } from "react";

const DropdownOptions = () => {
  const [options, setOptions] = useState([{ id: Date.now(), text: "" }]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (id, text) => {
    setOptions(
      options.map((option) => (option.id === id ? { ...option, text } : option))
    );
  };

  const addOption = () => {
    setOptions([...options, { id: Date.now(), text: "" }]);
  };

  const removeOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mt-2">
      <select
        className="w-full p-2 border rounded mb-2"
        value={selectedOption || ""}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={option.id} value={option.text}>
            {option.text || `Option ${index + 1}`}
          </option>
        ))}
      </select>
      {options.map((option, index) => (
        <div key={option.id} className="flex items-center mb-2">
          <input
            type="text"
            value={option.text}
            onChange={(e) => handleOptionChange(option.id, e.target.value)}
            className="w-full p-2 border rounded"
            placeholder={`Option ${index + 1}`}
          />
          <button
            onClick={() => removeOption(option.id)}
            className="ml-2 p-2 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addOption}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Add Option
      </button>
    </div>
  );
};

export default DropdownOptions;
