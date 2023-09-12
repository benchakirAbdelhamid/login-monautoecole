import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Form = () => {
  return (
    <div className="form">
      <form class="form_container">
        <div class="title_container">
          <p class="title">Login </p>
        </div>
        <br />
        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input placeholder="Email" type="text" class="input_field" />
        </div>
        <div class="input_container">
          <span class="icon">
            <RiLockPasswordFill />
          </span>
          <input placeholder="Password" type="password" class="input_field" />
        </div>
        <button title="Sign In" type="submit" class="sign-in_btn">
          <span>Sign In</span>
        </button>
        <p class="note">
          Dont't have an account{" "}
          <a href="" className="text-red">
            {" "}
            <NavLink to="/SignUpAutoEcole"> Signup Now </NavLink>
           
          </a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Form;
