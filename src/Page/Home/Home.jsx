import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import logo from "../../assets/images/logo.png";
import Card from "../../components/Card/Card";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";
import four from "../../assets/images/four.jpg";
import Table from "../../components/Table/Table";
import About from "../../components/About/About";
import Details from "../../components/Details/Details";

/*Navbar */
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h4>HuggebyRoop</h4>
      </div>
      <div className="menu">
        <ul className="navbar-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/details">Page Details</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </div>
  );
};

/*Home Page*/

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={logo} alt="Home Visual" />
      </div>
      <div className="home-right">
        <h1>Welcome to Our HugbyRoop</h1>
        <p>
          We offer the best services for your needs. Explore our features and
          discover how we can help you grow. Stay tuned for exciting updates and
          offers!
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

/*About*/
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Details" element={<Detail />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

/* Detail Page*/

const Detail = () => {
  const product = {
    title: "Premium Hand Embroidery",
    description: "Custom hand embroidery for suits, hoops, dresses, and more.",
    price: "₹1999",
  };

  const columns = [
    { Header: "Product Name", accessor: "product name" },
    { Header: "Product Size", accessor: "product size" },
    { Header: "Product Details", accessor: "product details" },
    { Header: "Product Price", accessor: "product price" },
  ];

  const data = [
    {
      "product name": "Fabric",
      "product size": "Large",
      "product details": "Cotton, Silk, Linen",
      "product price": "₹1999",
    },
    {
      "product name": "Thread",
      "product size": "Medium",
      "product details": "Silk Thread",
      "product price": "₹899",
    },
    {
      "product name": "Hoop",
      "product size": "8 inch",
      "product details": "Wooden hoop for embroidery",
      "product price": "₹499",
    },
    {
      "product name": "Needle Set",
      "product size": "Small",
      "product details": "Pack of 12 embroidery needles",
      "product price": "₹299",
    },
    {
      "product name": "Pattern Guide",
      "product size": "A4",
      "product details": "Printed embroidery patterns",
      "product price": "₹149",
    },
    {
      "product name": "Fabric Marker",
      "product size": "Pen",
      "product details": "Washable ink for marking",
      "product price": "₹99",
    },
  ];

  return (
    <div className="detail-page">
      <div className="product-section">
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>{product.price}</h3>
        </div>
      </div>

      <div className="table-section">
        <h2>Product Specifications</h2>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

/*Contact Page*/
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-image">
        <img src={two} alt="Contact" />
      </div>

      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

/*Footer page*/
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>HuggebyRoop</h3>
        <p>
          Bringing timeless beauty to fabric with handcrafted embroidery made
          with care and creativity.
        </p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <a href="#">rajveerrayat8@gmai.com</a>
          </li>
          <li>
            <a href="#">+91 6545824436</a>
          </li>
          <li>
            <a href="#">V.P.O Kotla Nihang Punjab,140001</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Home;
