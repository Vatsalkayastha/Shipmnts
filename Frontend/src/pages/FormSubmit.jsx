import React, { useState, useEffect } from "react";

const FormSubmit = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formResponse");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="bg-violet-400 min-h-[100vh]">
      <div className="mx-auto p-6 w-[50vw] block">
        <div className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-4">Form Submission</h2>
          {formData ? (
            <div>
              <p>Your response has been recorded. Thank you!</p>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          ) : (
            <p>No form response found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
