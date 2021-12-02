import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    // <form className="form">
    //   <input type="text" placeholder="Username" />
    //   <input type="password" placeholder="Password" />
    //   <input type="password" placeholder="Confirm Password" />
    //   <button type="submit">Register</button>
    // </form>
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.status === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.status ? "Login" : "Register"}</button>
    </form>
  );
}
export default Form;
