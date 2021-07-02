import React from "react";
import breweryImage from "./../img/Tap-Room-Brewery.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <style>
  
      </style>
      <img width="50%" src={breweryImage} alt="Brewery machines in a warehouse" />
    </React.Fragment>
  );
}

export default Header;