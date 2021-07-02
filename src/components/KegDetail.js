import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <div class="Detail-page">
        <h1>Keg Detail</h1>
        <h3>{keg.name}</h3>
        <p><em>Brand: {keg.brand}</em></p>
        <p><em>Price per Pint: {keg.price}</em></p>
        <p><em>Alcohol Content: {keg.alcoholContent}</em></p>
        <p><em>Pints left over: </em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;