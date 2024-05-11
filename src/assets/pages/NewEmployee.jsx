import React, { useState } from "react";
import axios from "axios";

const NewEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    designation: "",
    gender: "",
    course: "",
    img_file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      img_file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare data to be saved
      const dataToSave = { ...formData };

      // Make a POST request to save the data using JSON Server
      await axios.post("http://localhost:3001/employees", dataToSave);

      // Reset form data after successful submission
      setFormData({
        name: "",
        email: "",
        mobile_no: "",
        designation: "",
        gender: "",
        course: "",
        img_file: null,
      });

      // Inform the user that the data has been saved
      alert("Employee data saved successfully!");
    } catch (error) {
      console.error("Error saving employee data:", error);
      // Inform the user that there was an error
      alert("Failed to save employee data. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">New Employee</h5>
              <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                  <div className="mb-3" key={key}>
                    {key !== "img_file" ? (
                      <>
                        <label htmlFor={key} className="form-label">
                          {key.replace(/_/g, " ")}
                        </label>
                        <input
                          type={key === "email" ? "email" : "text"}
                          className="form-control"
                          id={key}
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          required
                        />
                      </>
                    ) : (
                      <div>
                        <label htmlFor="img_file" className="form-label">
                          {key.replace(/_/g, " ")}
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="img_file"
                          name="img_file"
                          onChange={handleFileChange}
                          accept="image/*"
                          required
                        />
                      </div>
                    )}
                  </div>
                ))}
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEmployee;
