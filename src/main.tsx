import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@material/web/checkbox/checkbox.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/textfield/outlined-text-field.js";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "md-checkbox": any;
      "md-outlined-button": any;
      "md-filled-button": any;
      "md-filled-text-field": any;
      "md-outlined-text-field": any;
    }
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
