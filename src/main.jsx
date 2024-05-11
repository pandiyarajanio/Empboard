import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Emplist from "./assets/data/Emplist.json";
import App from "./App.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import Login from "./assets/pages/Login.jsx";
import NewEmployee from "./assets/pages/NewEmployee.jsx";
import AllEmployees from "./assets/pages/AllEmployees.jsx";
import EditEmployee from "./assets/pages/EditEmployee.jsx";

import "./index.css";

const Root = () => {
  const [islogin, setIslogin] = useState(false);

  const logged = (e) => {
    console.log(e);
    setIslogin(e);
  };

  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login logged={logged} />} />
          <Route path="/">
            <Route path="new-emp" element={<NewEmployee />} />
            <Route path="employees" element={<AllEmployees />} />
            <Route path="edit/emp/:empid" element={<EditEmployee />} />
          </Route>
          <Route path="*" element={<div>404 Page - No Routes</div>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
