import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewContact from './Contact/NewContact';
import EditContact from './Contact/EditContact';
import Dashboard from "./components/Dashboard";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Component" element={<MyComponent />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/edit-contact" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
}