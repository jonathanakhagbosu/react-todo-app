import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import All from "./components/pages/All";
import Active from "./components/pages/Active";
import Completed from "./components/pages/Completed";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
};

export default App;
