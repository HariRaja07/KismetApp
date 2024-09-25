import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Content from "./components/Content";
import Works from "./components/Works";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<Content />} />
          <Route path="Works" element={<Works/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
