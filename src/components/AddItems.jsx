import React, { useState, useEffect } from "react";
import { Input ,InputPicker } from "rsuite";
import "../assets/scss/Additem.css";

function AddItems({ onClose }) {

  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
    'Julia',
    'Albert',
    'Louisa',
    'Lester',
    'Lola',
    'Lydia',
    'Hal',
    'Hannah',
    'Harriet',
    'Hattie',
    'Hazel',
    'Hilda'
  ].map(item => ({ label: item, value: item }));

  useEffect(() => {
    const handleShourcut = (e) => {
      if (e.key === "F2") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleShourcut);

    return () => {
      window.removeEventListener("keydown", handleShourcut);
    };
  }, []);
  return (
    <div className="addItems-main-container">
      <div className="addItems-main-containeir-top">Add New Item</div>
      <div className="addItems-container">
        <div className="addItems-main-container-mid">
          <div className="addItems-main-container-mid-input">
            <div className="addItems-inputs">
              <label> Item Code</label>
              <Input />
            </div>
            <div className="addItems-inputs-des">
              <label> Item Name</label>
              <Input />
            </div>
          </div>
          <div className="addItems-main-container-mid-input">
            <div className="addItems-inputs-des">
              <label> Suplier </label>
              <Input />
            </div>
            <div className="addItems-inputs">
              <label>Catagory</label>
              <InputPicker data={data} style={{ width: 224  }}  />
            </div>
          </div>
          <div className="addItems-main-container-mid-input">
            <div className="addItems-inputs">
              <label> Pack Size</label>
              <Input />
            </div>
            <div className="addItems-inputs">
              <label>Cost Price(Pack)</label>
              <Input />
            </div>
            <div className="addItems-inputs">
              <label> Unit Price</label>
              <Input />
            </div>
          </div>
          <div className="addItems-main-container-mid-input">
            <div className="addItems-inputs">
              <label>Selling Price</label>
              <Input />
            </div>
            <div className="addItems-inputs">
              <label>Old Selling Price</label>
              <Input />
            </div>
            <div className="addItems-inputs">
              <label>Retail Price</label>
              <Input />
            </div>
          </div>
          <div className="addItems-main-container-mid-input">
            <div className="addItems-inputs-last">
              <label>Description</label>
              <Input />
            </div>
          </div>
        </div>
        <div className="addItems-main-container-bot">
          <button type="button" class="btn btn-primary">
            Add Item
          </button>
          <button
            type="button"
            class="btn btn-danger"
            style={{ marginLeft: "23px" }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItems;
