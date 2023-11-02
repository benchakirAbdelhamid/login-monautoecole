import React, { useState } from "react";
import { AiOutlineMail, AiOutlineUser, AiTwotoneMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SignUpAutoecole = () => {

  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    adresse: '',
    email: '',
    password: '',
    typeAbonnement: '',
    infoFiscales: '',
    social: '',
    localisation : ''
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
    <div className="form mt-SignUp">
      <form class="form_container">
        <div class="title_container">
          <p class="title">Sign Up Auto Ecole</p>
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
            placeholder="Name"
            type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input
          name="tel"
            value={formData.tel}
            onChange={handleChange}
            placeholder="Tel" type="tel" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input
          name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            placeholder="Adresse" type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineMail />
          </span>
          <input
          name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email" type="email" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <RiLockPasswordLine />
          </span>
          <input
          name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password" type="password" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input
          name="typeAbonnement"
            value={formData.typeAbonnement}
            onChange={handleChange}
            placeholder="type abonnement"
            type="text"
            class="input_field"
          />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input
          name="infoFiscales"
            value={formData.infoFiscales}
            onChange={handleChange}
            placeholder="info fiscales" type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input
          name="localisation"
            value={formData.localisation}
            onChange={handleChange}
            placeholder="localisation" type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input
          name="social"
            value={formData.social}
            onChange={handleChange}
            placeholder="social" type="text" class="input_field" />
        </div>

        <div class="input_container parent-inputFile">
          <div class="label-inputFile">logo</div>
          <label for="images" class="drop-container" id="dropcontainer">
            <input type="file" id="images" accept="image/*" required />
          </label>
        </div>

        <button title="Sign In" type="button" onClick={sendValuesInputes} class="sign-in_btn">
          <span>Sign Up</span>
        </button>
        <p class="note">
          Do you have an account
          <a href="" className="text-red">
            {" "}
            <NavLink to="/Login">Login Now </NavLink>
          </a>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUpAutoecole;
