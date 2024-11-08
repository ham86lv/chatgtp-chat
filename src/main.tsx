import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
