import React from "react";
import { useLocation } from "react-router-dom";

const FormPreview = () => {
  const location = useLocation();
  const formData = location.state.formData;
  return (
    <div className="bg-violet-400 min-h-[100vh]">
      <div className="mx-auto p-6 w-[50vw] block">
        <h2 className="text-3xl font-bold mb-4">{formData.formTitle}</h2>
        <p className="mb-4">{formData.formDescription}</p>
        {formData.formElements.map((element) => (
          <div key={element.id} className="mb-4 bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">{element.question}</h3>
            {/* Render different types of elements here */}
            <p>{element.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPreview;
