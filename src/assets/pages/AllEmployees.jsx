import React, { useState, useEffect } from "react";
import axios from "axios";

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from JSON Server when component mounts
    axios
      .get("http://localhost:3001/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
console.log(employees)
  return (
    <div className="container mt-5">
      <h2>All Employees</h2>
      <div className="row">
        {employees.map((employee) => (
          <div className="col-md-6 mb-4" key={employee.id}>
            <div className="card">
              <img
                src={employee.img_file}
                className="card-img-top"
                alt={employee.name}
              />
              <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <p className="card-text">Email: {employee.email}</p>
                <p className="card-text">Mobile No: {employee.mobile_no}</p>
                <p className="card-text">Designation: {employee.designation}</p>
                <p className="card-text">Gender: {employee.gender}</p>
                <p className="card-text">Course: {employee.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEmployees;
