import React from "react";
import breweryImage from "./../img/Tap-Room-Brewery.jpg";

function Header(){
  return (
    <React.Fragment>
     <div style={{ backgroundImage: `ur(${breweryImage})`}}>
      <h1>Help Queue</h1>
     </div>
    </React.Fragment>
  );
}

export default Header;