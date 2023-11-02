import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlinePercentage,
  AiOutlineUser,
  AiTwotoneMessage,
} from "react-icons/ai";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SignUpCandidate = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (e) => {
    // console.log(e.target.value)
    // console.log(selectedValue)
    setSelectedValue(e.target.value); // Get the value by accessing the 'value' property of the event target
  };

  const [formData, setFormData] = useState({
    CIN: "",
    Nom: "",
    Prenom: "",
    Adress: "",
    Email: "",
    Password: "",
    Age: "",
    Gsm: "",
    Bessoin: "",
    checkLanguage: "",
    categorie: "",
    language : ''
  });

  const handleChange = (e) => {
    // console.log(e.target.value)
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendValuesInputes = () => {
    console.log(formData);
  };

  return (
    <div className="form mt-SignUp">
      <form class="form_container">
        <div class="title_container">
          <p class="title">Sign Up Candidate</p>
        </div>
        <br />

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input
            name="CIN"
            value={formData.name}
            onChange={handleChange}
            placeholder="CIN"
            type="text"
            class="input_field"
          />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input
            name="Nom"
            value={formData.Nom}
            onChange={handleChange}
            placeholder="Nom"
            type="text"
            class="input_field"
          />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input
            name="Prenom"
            value={formData.Prenom}
            onChange={handleChange}
            placeholder="Prenom"
            type="text"
            class="input_field"
          />
        </div>
        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input
            name="Adress"
            value={formData.Adress}
            onChange={handleChange}
            placeholder="Adress"
            type="text"
            class="input_field"
          />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineMail />
          </span>
          <input
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            class="input_field"
          />
        </div>

        <div class="input_container">
          <span class="icon">
            <RiLockPasswordLine />
          </span>
          <input
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            class="input_field"
          />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiTwotoneMessage />
          </span>
          <input
            name="Gsm"
            value={formData.Gsm}
            onChange={handleChange}
            placeholder="Gsm"
            type="text"
            class="input_field"
          />
        </div>

        <div class=" parent-radio">
          <div class="label-radio">Categorie :</div>
          <div class=" inputs-radio flex flex-wrap ">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="A"
                data-ripple-dark="true"
              >
                <input
                  id="A"
                  name="Categorie"
                  type="radio"
                  value="A"
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      ["categorie"]: e.target.value,
                    }));
                  }}
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-800 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:before:bg-red-700 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-800 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                for="A"
              >
                A
              </label>
            </div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="B"
                data-ripple-dark="true"
              >
                <input
                  id="B"
                  name="Categorie"
                  type="radio"
                  value="B"
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      ["categorie"]: e.target.value,
                    }));
                  }}
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:before:bg-red-700 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-700 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                for="B"
              >
                B
              </label>
            </div>
          </div>
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlinePercentage />
          </span>
          <input
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            placeholder="Age"
            type="number"
            class="input_field"
          />
        </div>

        <div class="parent-radio">
          <div class="label-radio">Longue</div>
          <div class=" inputs-radio flex flex-wrap ">
          <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="anglais"
                data-ripple-dark="true"
              >
                <input
                  id="anglais"
                  type="radio"
                  name="Longue"
                  value="anglais"
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      ["language"]: e.target.value,
                    }));
                  }}
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:before:bg-red-700 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-700 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                for="anglais"
              >
                anglais
              </label>
            </div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="arabic"
                data-ripple-dark="true"
              >
                <input
                  id="arabic"
                  name="Longue"
                  type="radio"
                  value="arabic"
                  // value={formData.checkLanguage}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      ["language"]: e.target.value,
                    }));
                  }}
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:before:bg-red-700 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-700 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                for="arabic"
              >
                arabic
              </label>
            </div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="france"
                data-ripple-dark="true"
              >
                <input
                  id="france"
                  type="radio"
                  name="Longue"
                  value="france"
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      ["language"]: e.target.value,
                    }));
                  }}
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-800 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:before:bg-red-700 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-800 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                for="france"
              >
                france
              </label>
            </div>
           
          
          </div>
        </div>

        <div class="parent-textarea">
          <textarea
            name="Bessoin"
            value={formData.Bessoin}
            onChange={handleChange}
            placeholder="Bessoin (optionnel)"
            class="input_ftextarea"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button
          onClick={sendValuesInputes}
          title="Sign In"
          type="button"
          class="sign-in_btn"
        >
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

export default SignUpCandidate;
