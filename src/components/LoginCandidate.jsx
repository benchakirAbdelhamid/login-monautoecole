import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendValuesInputes = () => {
    console.log(formData)
  }


  return (
    <div className="form">
      <form class="form_container" >
        <div class="title_container">
          <p class="title">Login </p>
        </div>
        <br />
        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Email" type="text" class="input_field" />
        </div>
        <div class="input_container">
          <span class="icon">
            <RiLockPasswordFill />
          </span>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange} placeholder="Password" type="password" class="input_field" />
        </div>
        <button
          onClick={sendValuesInputes}
          type="button"
          title="Sign In" class="sign-in_btn">
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
