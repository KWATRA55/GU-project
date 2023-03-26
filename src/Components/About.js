import React, { Component } from "react";
import Fade from "react-reveal";
import Menu from "./Menu";

const About = (props) => {

   const name = props.name;
   const bio = props.bio;

    return (
      <section id="about" >
        <Fade duration={1000}>
          <div className="row" id={name}>
            
            <div className="nine columns main-col">
              <h2>{name}</h2>

              <p>{bio}</p>

              <Menu />
                
            </div>
          </div>
        </Fade>
      </section>
    );
  }

export default About;
