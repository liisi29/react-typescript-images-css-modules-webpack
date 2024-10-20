import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import * as styles2 from "./heading.module.css";
import * as styles from "./content.css";
import car from "./car.jpg";

console.log("s1", styles);
console.log("s2", styles2);
const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

const Heading = () => <h1>My React and TypeScript App</h1>;

const Content = () => (
  <div className={styles?.container}>
    <img src={car} width={"500px"} height={"500px"} />
  </div>
);

createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
