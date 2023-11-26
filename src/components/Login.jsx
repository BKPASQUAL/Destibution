import React, { useState } from "react";
import "../assets/scss/Login.css";
import {  InputGroup } from "rsuite";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import "rsuite/dist/rsuite-no-reset.min.css";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import LockIcon from "@rsuite/icons/legacy/Lock";
import { Button } from "rsuite";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";

function Login() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [ massage , setMassage ] = useState();
  const handleChange = () => {
    setVisible(!visible);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger a click on the Login button
      document.getElementById("login-button").click();
    }
  };

  const handleonChange = (e) => {
    e.preventDefault();
    setData((pre) => ({
      ...pre,
      username: e.target.value,
    }));
  };

  const handleLogin = () =>{
    if( data.username === "BK" && data.password === "1234" ) {
      console.log(data)
      navigate("/home");

    } else {
      setMassage("Wrong Username or Password ")
    }
  }


  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-container-top">Login</div>
        <div className="login-container-mid">
          <InputGroup style={{ marginBottom: "7%" }}>
            <InputGroup.Addon>
              <AvatarIcon />
            </InputGroup.Addon>
            <input
              className="rs-input"
              placeholder="Username"
              value={data.username}
              onChange={handleonChange}
            />
          </InputGroup>
          <div className="login-container-mid">
            <InputGroup style={{ marginBottom: "10%" }}>
              <InputGroup.Addon>
                <LockIcon />
              </InputGroup.Addon>
              <input
              className="rs-input"
                type={visible ? "text" : "password"}
                placeholder="Password"
                value={data.password}
                onChange={(e) => {
                  e.preventDefault();
                  setData((pre)=> ({
                    ...pre,
                    password:e.target.value
                  }))
                }}
              />
              <InputGroup.Button onClick={handleChange}>
                {visible ? <EyeIcon /> : <EyeSlashIcon />}
              </InputGroup.Button>
            </InputGroup>
          </div>
        </div>
        <p> {massage}</p>
        <div className="login-container-bot">
          <button
            className="rs-btn rs-btn-primary"
            id="login-button" // Add an ID to the Login button
            appearance="primary"
            style={{ width: "30%", marginBottom: "30%" }}
            onClick={handleLogin}
          >
            Login
          </button>
          <Link>
            <p>Forgot Password</p>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
