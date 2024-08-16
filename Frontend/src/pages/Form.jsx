import React, { useState } from "react";
import ElementSelector from "../components/ElementSelector.jsx";
import FormElementRender from "../components/FormElementRender.jsx";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formElements, setFormElements] = useState([]);
  const [errors, setErrors] = useState({});
   const navigate = useNavigate();
  const addElement = () => {
    setFormElements([
      ...formElements,
      {
        id: Date.now(),
        question: "",
        type: "text-short",
        description: "",
        required: false,
        answer: "",
      },
    ]);
  };

  const updateElement = (id, updatedElement) => {
    setFormElements(
      formElements.map((element) =>
        element.id === id ? { ...element, ...updatedElement } : element
      )
    );
  };

  const duplicateElement = (id) => {
    const elementToDuplicate = formElements.find(
      (element) => element.id === id
    );
    setFormElements([
      ...formElements,
      {
        ...elementToDuplicate,
        id: Date.now(),
      },
    ]);
  };

  const deleteElement = (id) => {
    setFormElements(formElements.filter((element) => element.id !== id));
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     const newErrors = {};
     formElements.forEach((element) => {
       if (element.required && !element.answer.trim()) {
         newErrors[element.id] = "This field is required.";
       }
     });
     if (Object.keys(newErrors).length === 0) {
       // Navigate to the preview page and pass form data through state
       navigate("/preview", {
         state: { formData: { formTitle, formDescription, formElements } },
       });
     } else {
       setErrors(newErrors);
     }
  };

  return (
    <div className="bg-violet-400 min-h-[100vh]">
      <div className="mx-auto p-6 w-[50vw] block">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow-md mb-4"
        >
          <h2 className="text-2xl font-bold mb-4">Create Your Form</h2>
          <input
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder="Form Title"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
          />
          <textarea
            className="w-full p-2 border rounded mb-4"
            placeholder="Form Description"
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
          />
          {formElements.map((element) => (
            <FormElementRender
              key={element.id}
              element={element}
              onUpdate={updateElement}
              onDuplicate={duplicateElement}
              onDelete={deleteElement}
              error={errors[element.id]}
            />
          ))}
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded mt-4"
          >
            Preview
          </button>
        </form>
        <ElementSelector onAddElement={addElement} />
      </div>
    </div>
  );
};

export default Form;
