import React from "react";
import { projects } from "../../data/projects";
export default function Card() {
  return (
    <div>
      {projects.map((project) => (
        <div className="card">
          <div className="card-image" id="card-one">
            <img src={project.image} alt="netflix" />
          </div>
          <div className="card-content">
            <h1>
              <a href={project.deploy}>{project.name}</a>
            </h1>
            <p>{project.description}</p>
            <ul>
              {project.techs.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="card-footer">
            <div className="btn-view">
              <a href={project.deploy}>Visualizar Projeto</a>
            </div>
            <div className="btn-sociais">
              <a href={project.repo}>
                <img src="/images/black/github.png" alt="github" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
