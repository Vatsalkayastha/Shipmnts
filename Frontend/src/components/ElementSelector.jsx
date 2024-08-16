// src/components/ElementSelector.js
import React from "react";

const ElementSelector = ({ onAddElement }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <button
        onClick={onAddElement}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Add New Question
      </button>
    </div>
  );
};

export default ElementSelector;
