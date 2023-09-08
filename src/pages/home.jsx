import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Home
      <br />
      <NavLink to="Login">Login condidate</NavLink>
      <br />
      <NavLink to="SignUp">SignUp condidate</NavLink>
      <br />
      <NavLink to="LoginAutoEcole">Login autoecole</NavLink>
      <br />
      <NavLink to="SignUpAutoEcole">SignUp autoecole</NavLink>
    </div>
  );
};

export default Home;
