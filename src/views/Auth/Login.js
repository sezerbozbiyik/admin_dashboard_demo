import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="center_div">
        <table className="table">
          <th colSpan="2">
            <a>Sign in</a>
          </th>
          <tr>
            <td colSpan="2">
              <label name="email">Email Address</label>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input type="text" placeholder="Enter email" name="email"></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <label name="pwd">Password</label>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input
                type="password"
                placeholder="Enter password"
                name="pwd"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="24px">
              <input type="checkbox" name="chk"></input>
            </td>
            <td>
              <label name="chk">Remember me</label>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Link to="/"><button type="submit" name="submit">
                Submit
              </button></Link>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <a>Forgot Password?</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Login;
