import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Импорт шрифтов Roboto и Montserrat Alternates из Google Fonts
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400&family=Montserrat+Alternates:wght@600&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
