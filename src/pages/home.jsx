import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Home
      <br />
      <NavLink to="Login">Login</NavLink>
      <br />
      <NavLink to="SignUp">SignUp</NavLink>
    </div>
  );
};

export default Home;
