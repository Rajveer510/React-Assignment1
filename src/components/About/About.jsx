import React from "react";
import "./About.css";
import Card from "../Card/Card";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";
import four from "../../assets/images/four.jpg";

const About = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are passionate about creating clean and
        modern web solutions. Our mission is to deliver high-quality,
        user-friendly digital experiences for everyone.
      </p>

      <div className="card-container">
        <Card
          title="Hand Embroidery"
          content="Here you can customize hand embroidery on your suits, dress hoops, etc."
          image={one}
        />
        <Card
          title="Embroidary hoop"
          content="We offer different types of embroidery patterns for modern outfits."
          image={two}
        />
        <Card
          title="Suit Embroidary"
          content="We offer different types of embroidery patterns for modern outfits."
          image={three}
        />
        <Card
          title="Customised Design"
          content="We offer different types of embroidery patterns for modern outfits."
          image={four}
        />
      </div>
    </div>
  );
};

export default About;
