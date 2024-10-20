import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import * as heading from "./heading.module.css";
import * as content from "./content.module.css";
import car from "./car.jpg";
const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

const Heading = () => (
  <h1 className={heading.heading}>My React and TypeScript App</h1>
);

const Content = () => (
  <div className={content?.container}>
    <img src={car} width={"500px"} height={"500px"} />
  </div>
);

createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
