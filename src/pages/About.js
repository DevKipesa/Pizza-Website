import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          This is a Company that is highly known for delicious pizza. All pizzas are highly affordable to any
          individual. If you buy 3 pizzas you get an extra free pizza. Welcome and enjoy PIZZA.
        </p>
      </div>
    </div>
  );
}

export default About;