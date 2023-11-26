import { useState, React } from "react";
import Header from "./Header";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text } from "@fortawesome/fontawesome-svg-core";

function Test() {
  const [inputData, setInputData] = useState({
    name: "Bk",
    age: "",
    ads: "",
    city: "",
    password:"",
  });

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    console.log(inputData);
  };
  return (
    <div>
      <Header />

      <input
        type="text"
        value={inputData.name}
        onChange={(e) => {
          e.preventDefault();
          setInputData((pre) => ({
            ...pre,
            name: e.target.value,
          }));
        }}
      />
      <input
        type="text"
        value={inputData.age}
        onChange={(e) => {
          e.preventDefault();
          setInputData((pre) => ({
            ...pre,
            age: e.target.value,
          }));
        }}
      />
      <input
        type="text"
        value={inputData.ads}
        onChange={(e) => {
          e.preventDefault();
          setInputData((pre) => ({
            ...pre,
            ads: e.target.value,
          }));
        }}
      />
      <input
        type="text"
        value={inputData.city}
        onChange={(e) => {
          e.preventDefault();
          setInputData((pre) => ({
            ...pre,
            city: e.target.value,
          }));
        }}
      />
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        onChange={(e) => {
          e.preventDefault();
          setInputData((pre)=>({
            ...pre,
            password:e.target.value
          }))
        }}
      />
      <FontAwesomeIcon
        icon={show ? faEye : faEyeSlash}
        onClick={() => {
          setShow(!show);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Test;
