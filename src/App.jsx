import React, { Component, Fragment } from "react";
import styled, { css, keyframes } from "react-emotion";
import { Route, Link } from 'react-router-dom'
const Intro = () => {
  const box = css`  
    height: 10rem;
    width: 25rem;
    line-height: 10rem; 
    border: 2px solid white;
    border-radius: 5px;
    text-align: center;
    font-size: 2rem;
    color: white;
  `;
  const backgroundGradient = keyframes `
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  `;
  return <div className={css(`
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: linear-gradient(132deg, #ec5218, #1665c1);
          background-size: 400% 400%;
          animation: ${backgroundGradient} 30s ease infinite;
          font-family: "Open Sans";
          font-weight: bold;
          color: white;
        `)}>
      <h1>
        Hello, my name is Tin Dang, and welcome to my website. Curious to know more about me? Click the
        links below
      </h1>
      <section className={css`
        display: flex; 
        width: 65%; 
        justify-content: space-between;
        margin: 1rem 0;
      `}>
        <Link className={box} to="/about">
          About
        </Link>
        <Link className={box} to="/porfolio">
          Portfolio
        </Link>
        <Link className={box} to="/contact">
          Contact
        </Link>
      </section>
    </div>;
};
const About = () => (
  <section
    className={css(`
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
  `)}
  >
    <div className={css(`text-align: center`)}>
      <img
        className="rounded-circle"
        style={{ height: "10rem", width: "9rem" }}
        src={require("../assets/profile_pic.jpg")}
      />
      <h3>Tin Dang</h3>
      <h3>Front-end/Fullstack Developer</h3>
      <a
        href="https://www.linkedin.com/in/tin-dang-ba525251/"
        className="fa fa-linkedin"
      />
      <a
        href="https://www.github.com/tindang17"
        className="fa fa-github"
      />
      <a
        href="https://www.twitter.com/tindang17"
        className="fa fa-twitter"
      />
    </div>
    <div
      className={css`
        height: 300px;
        width: 40%;
      `}
    >
      <p>
        I was born and raised in Vietnam. I came to Canada in 2012 to attend
        university. I went to Simon Fraser University to study economics, but I
        lost interest in the subject during my senior year. One day, my friend
        told me about Lighthouse Labs and I decided to give it a shot. That's
        the beginning of my journey as a developer. From not knowing what a
        varible was to a fullstack dev in just two months.
      </p>
      <p>
        Although I am a fullstack developer, my focus is toward front-end
        because I want to be proficient at one thing at a time. Why did I choose
        front-end? Because I am more proficient at front-end than back-end. In
        term of technologies, I am proficient at JavaScript, HTML5/CSS3,
        React.js/Redux, Joomla, Sass, jQuery, Node.js and Express.js. I have
        worked on various projects, which you can find it{" "}
        <Link to="/portfolio">here</Link>, using those technologies
      </p>
    </div>
  </section>
);

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Intro} />
        <Route path="/about" component={About}/>
      </Fragment>
    )
  }
}