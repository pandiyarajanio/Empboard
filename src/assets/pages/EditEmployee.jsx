import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const { empid } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    designation: "",
    gender: "",
    course: "",
    img_file: null,
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        // Fetch employee data by ID from JSON Server
        const response = await axios.get(
          `http://localhost:3001/employees/${empid}`
        );
        const employeeData = response.data;

        // Update form data with fetched employee data
        setFormData({
          name: employeeData.name,
          email: employeeData.email,
          mobile_no: employeeData.mobile_no,
          designation: employeeData.designation,
          gender: employeeData.gender,
          course: employeeData.course,
          img_file: null, // You might need to handle image separately if you want to display it
        });
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, [empid]);

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
      // Prepare data to be updated
      const dataToUpdate = { ...formData };

      // Make a PUT request to update the data using JSON Server
      await axios.put(`http://localhost:3001/employees/${empid}`, dataToUpdate);

      // Inform the user that the data has been updated
      alert("Employee data updated successfully!");
    } catch (error) {
      console.error("Error updating employee data:", error);
      // Inform the user that there was an error
      alert("Failed to update employee data. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Employee</h2>
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
  );
};

export default EditEmployee;
