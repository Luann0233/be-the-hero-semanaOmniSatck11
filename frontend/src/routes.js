import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Logon from "./Pages/Logon";
import NewIncident from "./Pages/NewIncident";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Logon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/incidents/new" element={<NewIncident />} />
      </Routes>
    </BrowserRouter>
  );
}
