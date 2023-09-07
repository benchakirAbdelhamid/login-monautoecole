import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUpCandidate = () => {
  return (
    <div className="form mt-SignUp">
      <form class="form_container">
        <div class="title_container">
          <p class="title">Sign Up</p>
        </div>
        <br />

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input placeholder="CIN" type="text" class="input_field" />
        </div>

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
          <input placeholder="Prenom" type="text" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input placeholder="Email" type="email" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input placeholder="Password" type="password" class="input_field" />
        </div>

        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input placeholder="Gsm" type="text" class="input_field" />
        </div>

        <div class=" parent-radio">
        
            <div class="label-radio">
            Categorie :
          </div>
          <div class="flex gap-6">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="html"
                data-ripple-dark="true"
              >
                <input
                  id="html"
                  name="type"
                  type="radio"
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
                for="html"
              >
                A
              </label>
            </div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="react"
                data-ripple-dark="true"
              >
                <input
                  id="react"
                  name="type"
                  type="radio"
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
                for="react"
              >
                B
              </label>
            </div>
          </div>
        </div>


        <div class="input_container">
          <span class="icon">
            <AiOutlineUser />
          </span>
          <input placeholder="Age" type="number" class="input_field" />
        </div>

          <div class=" parent-radio">
        
          <div class="label-radio">
            Longue :
          </div>
          <div class="flex gap-6">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="Longue"
                data-ripple-dark="true"
              >
                <input
                  id="Longue"
                  type="radio"
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
                for="html"
              >
                france
              </label>
            </div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="Longue"
                data-ripple-dark="true"
              >
                <input
                  id="Longue"
                  type="radio"
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
                for="react"
              >
                arabic 
              </label>
            </div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="Longue"
                data-ripple-dark="true"
              >
                <input
                  id="Longue"
                  type="radio"
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
                for="react"
              >
                anglais
              </label>
            </div>
          </div>
        </div>

        <div class="parent-textarea">
          <textarea placeholder="Bessoin (optionnel)" class="input_ftextarea" name="" id="" cols="30" rows="10"></textarea>
        </div>

        <button title="Sign In" type="submit" class="sign-in_btn">
          <span>Sign Up</span>
        </button>
        <p class="note">
          Dont't have an account{" "}
          <a href="" className="text-red">
            {" "}
            Signup Now
          </a>{" "}
        </p>

      </form>
    </div>
  );
};

export default SignUpCandidate;
