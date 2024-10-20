import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CourseProvider } from "./context/CourseProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CourseProvider>
      <App />
    </CourseProvider>
  </StrictMode>
);
