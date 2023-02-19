/** @jsxImportSource theme-ui */
import React from "react";
import Apresent from "./Apresent";
import Languages from "./Languages";
import Frameworks from "./Frameworks";

export default function AboutMe() {
  return (
    <div
      className="AboutMe"
      id="sobre-m"
      sx={{ color: "text", backgroundColor: "bgblue" }}
    >
      <Apresent></Apresent>
      <div className="skills-languages">
        <Languages></Languages>
        <Frameworks></Frameworks>
      </div>
    </div>
  );
}
