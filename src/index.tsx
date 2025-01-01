import { createRoot } from "react-dom/client";
import React, { useEffect } from "react";
import "./index.css";
import * as heading from "./heading.module.css";
import * as content from "./content.module.css";
import car from "./car.jpg";
import trans from "src/locales/translations.en.json";
const t = 3;
const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

const Heading = () => (
  <h1 className={heading.heading}>My React and TypeScript App {trans.title}</h1>
);

function Content() {
  const [state, setState] = React.useState(0);

  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div className={content?.container}>
      <img src={car} width={"500px"} height={"500px"} />
    </div>
  );
}

createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
