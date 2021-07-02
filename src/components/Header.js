import React from "react";
import breweryImage from "./../img/Tap-Room-Brewing.jpg";

function Header(){
  return (
    <React.Fragment>
     <div style={{ backgroundImage: `ur(${breweryImage})`}}>
      <h1>Tap Room</h1>
     </div>
    </React.Fragment>
  );
}

export default Header;