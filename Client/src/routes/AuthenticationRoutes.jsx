import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home";
import ContactDetails from "../pages/ContactDetails";
import UpdateContact from "../pages/UpdateContact";
import ErrorPage from "../pages/ErrorPage";

const AuthenticationRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="/:contactId" element={<ContactDetails />} />
          <Route path="/update/:contactId" element={<UpdateContact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AuthenticationRoutes;
