import React from "react";

const TableComponent = ({ columns, data }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                backgroundColor: "#f2f2f2",
              }}
            >
              {col.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              >
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
