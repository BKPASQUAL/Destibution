import React, { useState } from "react";
import "../../assets/scss/customerinvoive.css";
import Table from "react-bootstrap/Table";

function CustomerInvoice() {
  const [tableRows, setTableRows] = useState([
    {
      code: "",
      itemName: "",
      mrp: "",
      unit: "",
      frn: "",
      qty: "",
    },
  ]);

  const addRow = () => {
    setTableRows([
      ...tableRows,
      { code: "", itemName: "", mrp: "", unit: "", frn: "", qty: "" },
    ]);
  };

  const fetchDataBasedOnCode = (code) => {
    // Simulate data fetching. Replace this with your actual data fetching logic.
    if (code === "12345") {
      return {
        itemName: "Sample Item 1",
        mrp: "10.00",
        unit: "Each",
        frn: "Sample Frn",
      };
    } else if (code === "67890") {
      return {
        itemName: "Sample Item 2",
        mrp: "15.00",
        unit: "Each",
        frn: "Another Frn",
      };
    }
    return {}; // Return an empty object if code is not found.
  };

  const handleCodeChange = (index, newCode) => {
    const data = fetchDataBasedOnCode(newCode);

    setTableRows((prevTableRows) => {
      const updatedRows = [...prevTableRows];
      updatedRows[index] = {
        ...updatedRows[index],
        code: newCode,
        itemName: data.itemName || "",
        mrp: data.mrp || "",
        unit: data.unit || "",
        frn: data.frn || "",
      };
      return updatedRows;
    });
  };
  return (
    <div className="customerinvoive-main">
      <div className="customerinvoive-header">
        {" "}
        <h1>Invoice</h1>
      </div>
      <div className="customerinvoive-container">
        <div className="customerinvoive-container-top">
          <div className="customerinvoive-container-top-left">
            <div className="customerinvoive-input">
              <input type="text" placeholder="Bill No" />
            </div>
            <div className="customerinvoive-input">
              <input type="text" placeholder="Date" />
            </div>
          </div>
          <div className="customerinvoive-container-top-right">
            <div className="customerinvoive-input">
              <input type="text" placeholder="Invoice No" />
            </div>
            <div className="customerinvoive-input">
              <input type="text" placeholder="Cutomer" />
            </div>
            <div className="customerinvoive-input">
              <input type="text" placeholder="Address" />
            </div>
          </div>
        </div>
        <div className="customerinvoive-container-mid">
          <Table bordered hover >
            <thead>
              <tr>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  #
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Code
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Item Name
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Mrp
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Unit
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Frn
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Qty
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Rer.Qty
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Free.Qty
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Rate
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Dis%
                </th>
                <th style={{ textAlign: "center", backgroundColor: "#e7e7e7" }}>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr key={index}>
                  <td style={{ width: "1%", textAlign: "center" }}>
                    {index + 1}
                  </td>
                  <td style={{ width: "4%" }}>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.code}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                    />
                  </td>
                  <td style={{ width: "35%" }}>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.itemName}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.mrp}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.unit}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.frn}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.qty}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.qty}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.qty}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.qty}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.qty}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="customerinvoice-td-input"
                      value={row.qty}
                    />
                  </td>
                </tr>
              ))}
              <button onClick={addRow}>Add</button>
            </tbody>
          </Table>
        </div>
        <div className="customerinvoive-container-bot"></div>
      </div>
    </div>
  );
}

export default CustomerInvoice;
