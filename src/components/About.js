import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Liza loves living in the Big Apple because it's a walkable city that has so much to offer.</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
