import React, { useState } from "react";

const MultipleChoice = () => {
  const [options, setOptions] = useState([
    { id: Date.now(), text: "", selected: false },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (id, text) => {
    setOptions(
      options.map((option) => (option.id === id ? { ...option, text } : option))
    );
  };

  const addOption = () => {
    setOptions([...options, { id: Date.now(), text: "", selected: false }]);
  };

  const removeOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className="mt-2">
      {options.map((option, index) => (
        <div key={option.id} className="flex items-center mb-2">
          <input
            type="radio"
            className="mr-2"
            checked={selectedOption === option.id}
            onChange={() => handleOptionSelect(option.id)}
          />
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

export default MultipleChoice;
