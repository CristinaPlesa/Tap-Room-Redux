import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <p><em>Brand: {keg.brand}</em></p>
      <p><em>Price per Pint: {keg.price}</em></p>
      <p><em>Alcohol Content: {keg.alcoholContent}</em></p>
      <p><em>Pints left over: </em></p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;