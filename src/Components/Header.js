import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Notes
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Question Papers
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Gurugram University</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Welcome to the Btech Department website of our university! Our website is your one-stop destination for all your academic needs. Here, you can access previous year question papers and notes for all courses offered by the Btech Department..</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href='#notes' className="button btn project-btn smoothscroll">
                  <i className="fa fa-book"></i>Notes
                </a>
                <a href='#paper' className="button btn github-btn smoothscroll">
                  <i className="fa fa-book"></i>Question Papers
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
