import React from "react";
import { teams } from "../../../Data/TeamData";
import "./Team.css";

const Team = () => {
  return (
    <div className="team-container">
        <h2>Find your team</h2>
      <div className="team-section">
        <div className="team-img" />
        <div className="teams-list">
          {teams.map((team, index) => (
            <div className="team-card" key={index}>
              <h3>{team.title}</h3>
              <p>{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
