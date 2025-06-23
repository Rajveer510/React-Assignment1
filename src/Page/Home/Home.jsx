import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import one from "../../assets/images/one.jpg";
import Card from "../../components/Card/Card";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";
import four from "../../assets/images/four.jpg";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  const columns = [
    { Header: "Product", accessor: "name" },
    { Header: "Price", accessor: "price" },
    { Header: "Category", accessor: "category" }
  ];

  const data = [
    { name: "Embroidery Hoop", price: "₹500", category: "Handmade" },
    { name: "Custom Design", price: "₹1200", category: "Tailored" },
    { name: "Suit Embroidery", price: "₹2000", category: "Clothing" }
  ];

  return (
    <>
      <Navbar />
      <div id="home" style={sectionStyle}>
        <div className="home-left">
          <img src={one} alt="Welcome" />
        </div>
        <div className="home-right">
          <h1>Welcome to MySite</h1>
          <p>We build modern solutions to solve your daily problems with ease and efficiency.</p>
          <button className="home-btn">Explore Now</button>
        </div>
      </div>

      <div id="about" style={sectionStyle}>
        <div className="about-section">
          <h2>About Us</h2>
          <p>Welcome to our website! We are passionate about creating clean and modern web solutions.</p>
          <div className="card-container">
            <Card title="Hand Embroidery" content="Customize hand embroidery on suits." image={one} />
            <Card title="Embroidary Hoop" content="Modern embroidery patterns." image={two} />
            <Card title="Suit Embroidery" content="Various embroidery designs." image={three} />
          </div>
        </div>
      </div>

      <div id="product" style={sectionStyle}>
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.accessor}>{col.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.accessor}>{row[col.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="contact" style={sectionStyle}>
       <Contact/>

      </div>

      <Footer />
    </>
  );
};

const sectionStyle = {
  padding: "40px 20px",
  textAlign: "center",
  backgroundColor: "#f2f2f2",
  marginBottom: "10px"
};

export default Home;
