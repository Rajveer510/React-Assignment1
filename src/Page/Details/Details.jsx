import React from "react";
import "./Details.css";
import Table from "../../components/Table/Table";

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

export default Detail;
