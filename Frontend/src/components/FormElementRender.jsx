import React, { useState } from "react";
import MultipleChoice from "./MultipleChoice";
import Checkboxes from "./Checkboxes";
import DropdownOptions from "./DropdownOptions";

const FormElementRender = () => {
  const [inputType, setInputType] = useState("text-short");

  const renderInputField = () => {
    switch (inputType) {
      case "text-short":
        return (
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter short answer"
          />
        );
      case "text-long":
        return (
          <textarea
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter long answer"
          />
        );
      case "multiple-choice":
        return (
          <MultipleChoice />
        );
      case "checkboxes":
        return (
          <Checkboxes />
        );
      case "dropdown":
        return (
          <DropdownOptions />
        );
      case "date-picker":
        return <input type="date" className="w-full p-2 border rounded mt-1" />;
      case "file-upload":
        return <input type="file" className="w-full p-2 border rounded mt-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-4 bg-white p-4 rounded shadow-md">
      <div className="flex w-full gap-3">
        <input
          type="text"
          className="w-[70%] p-2 border rounded mb-2"
          placeholder="Enter your question"
        />
        <select
          className="w-[30%] p-2 border rounded mb-2"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="text-short">Short Text</option>
          <option value="text-long">Long Text</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="checkboxes">Checkboxes</option>
          <option value="dropdown">Dropdown</option>
          <option value="date-picker">Date Picker</option>
          <option value="file-upload">File Upload</option>
        </select>
      </div>
      {renderInputField()}
    </div>
  );
};

export default FormElementRender;
