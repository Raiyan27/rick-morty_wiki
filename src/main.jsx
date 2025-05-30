import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Casts from "./pages/Casts";
import Cast from "./pages/Cast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="casts" element={<Casts />} />
        <Route path="cast/:id" element={<Cast />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
