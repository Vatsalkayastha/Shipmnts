import React, { useState, useEffect } from "react";
import MultipleChoice from "./MultipleChoice";
import Checkboxes from "./Checkboxes";
import DropdownOptions from "./DropdownOptions";

const FormElementRender = ({
  element,
  onUpdate,
  onDuplicate,
  onDelete,
  error,
}) => {
  const [inputType, setInputType] = useState(element.type);
  const [question, setQuestion] = useState(element.question);
  const [description, setDescription] = useState(element.description);
  const [required, setRequired] = useState(element.required);
  const [answer, setAnswer] = useState(element.answer || "");

  useEffect(() => {
    onUpdate(element.id, { answer });
  }, [answer]);

  const handleInputChange = (e) => {
    setInputType(e.target.value);
    onUpdate(element.id, { type: e.target.value });
  };

  const renderInputField = () => {
    switch (inputType) {
      case "text-short":
        return (
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter short answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        );
      case "text-long":
        return (
          <textarea
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter long answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        );
      case "multiple-choice":
        return <MultipleChoice />;
      case "checkboxes":
        return <Checkboxes />;
      case "dropdown":
        return <DropdownOptions />;
      case "date-picker":
        return (
          <input
            type="date"
            className="w-full p-2 border rounded mt-1"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        );
      case "file-upload":
        return (
          <input
            type="file"
            className="w-full p-2 border rounded mt-1"
            onChange={(e) => setAnswer(e.target.files[0])}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-4 bg-white p-4 rounded shadow-md">
      <div className="flex w-full gap-3">
        <input
          type="text"
          className="w-[60%] p-2 border rounded mb-2"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            onUpdate(element.id, { question: e.target.value });
          }}
        />
        <input
          type="text"
          className="w-[25%] p-2 border rounded mb-2"
          placeholder="Description or Hint"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            onUpdate(element.id, { description: e.target.value });
          }}
        />
        <select
          className="w-[23%] p-2 border rounded mb-2"
          value={inputType}
          onChange={handleInputChange}
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
      <div className="flex items-center gap-2">
        <label className="mr-2">Required</label>
        <input
          type="checkbox"
          checked={required}
          onChange={(e) => {
            setRequired(e.target.checked);
            onUpdate(element.id, { required: e.target.checked });
          }}
        />
      </div>
      {renderInputField()}
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      <div className="flex items-center gap-2 mt-4">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => onDuplicate(element.id)}
        >
          Duplicate
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => onDelete(element.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FormElementRender;
