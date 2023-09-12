import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <NavLink to="Login">Login </NavLink>
      <br />
      <NavLink to="SignUp">SignUp condidate</NavLink>
      <br />
      <NavLink to="SignUpAutoEcole">SignUp autoecole</NavLink>
    </div>
  );
};

export default Home;
