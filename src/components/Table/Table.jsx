import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table-scroll-container">
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.accessor}>{col.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col.accessor}>{item[col.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
