import React from "react";
import image from "../img/write.png";
import "../App.css";

function Header() {
  return (
    <header>
      <h1>To-Do List</h1>
      <img src={image} alt="" />
    </header>
  );
}

export default Header;
