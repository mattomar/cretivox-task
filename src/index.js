import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { StrictMode } from "react";

import App from "./App"; // Import the main App component
import * as THREE from 'three';

const originalToHalfFloat = THREE.DataUtils.toHalfFloat;

THREE.DataUtils.toHalfFloat = function (value) {
  if (value > 65504 || value < -65504) {
    console.warn(`[THREE] toHalfFloat value out of range: ${value}`);
    console.trace();
    value = Math.max(Math.min(value, 65504), -65504);
  }
  return originalToHalfFloat(value);
};


// Get the root element where the React app will be rendered
 
createRoot(document.getElementById("app")).render(
    <StrictMode>
      <App />
     </StrictMode>
  );