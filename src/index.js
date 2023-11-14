import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Avatar } from "./components/avatar";
import { Intro } from "./components/intro";
import { SkillList } from "./components/skillList";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar className="avatar" />
      <div className="data">
        <Intro />
        <SkillList className="skill" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
