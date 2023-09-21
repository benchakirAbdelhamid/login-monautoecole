import React from "react";
import { AiOutlineMail, AiOutlineUser, AiTwotoneMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SignUpAutoecole = () => {
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
          <input placeholder="Nom" type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input placeholder="Tel" type="tel" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input placeholder="Adresse" type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineMail />
          </span>
          <input placeholder="Email" type="email" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <RiLockPasswordLine />
          </span>
          <input placeholder="Password" type="password" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input
            placeholder="type abonnement"
            type="text"
            class="input_field"
          />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input placeholder="info fiscales" type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input placeholder="localisation" type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input placeholder="social" type="text" class="input_field" />
        </div>

        <div class="input_container parent-inputFile">
          <div class="label-inputFile">logo</div>
          <label for="images" class="drop-container" id="dropcontainer">
            <input type="file" id="images" accept="image/*" required />
          </label>
        </div>

        <button title="Sign In" type="submit" class="sign-in_btn">
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
