import React, { useState } from "react";
import ElementSelector from "../components/ElementSelector.jsx";
import FormElementRender from "../components/FormElementRender.jsx";

const Form = () => {
    const [formTitle, setFormTitle] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [formElements, setFormElements] = useState([]);

     const addElement = () => {
       setFormElements([...formElements, { id: Date.now() }]);
     };

    return (
      <div className="bg-violet-400 min-h-[100vh]">
        <div className="mx-auto p-6 w-[50vw] block">
          <div className="bg-white p-4 rounded shadow-md mb-4">
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
              <FormElementRender key={element.id} />
            ))}
          </div>
          <ElementSelector onAddElement={addElement} />
        </div>
      </div>
    );
};

export default Form;
