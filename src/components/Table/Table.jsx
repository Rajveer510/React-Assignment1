import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Long Column Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shirt</td>
            <td>Blue cotton shirt</td>
            <td>$20</td>
            <td>5</td>
            <td>In Stock</td>
            <td>Extra long content here</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
