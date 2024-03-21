import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import CarItem from "../pages/CarItems";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import Register from "../pages/Register";
import Client from "../pages/Client";
import SubAdmin from "../pages/SubAdmin";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/carItem" element={< CarItem/>} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/client" element={<Client/>} />
      <Route path="/sub-admin" element={<SubAdmin/>}/>
    </Routes>
  );
};

export default Router;
