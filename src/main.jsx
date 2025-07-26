import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/index.css";
import { ThemeProvider } from "@/contexts/ThemeContext.jsx";
import App from "@/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="*" element="notfound" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
