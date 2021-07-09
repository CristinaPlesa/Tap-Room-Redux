import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="card">
          <form onSubmit={props.formSubmissionHandler}>
            <input
              type='text'
              name='name'
              placeholder='Keg Name' />
            <br/>
            <input
              type='text'
              name='brand'
              placeholder='Keg Brand' />
            <br/>
            <input
              type='text'
              name='price'
              placeholder='Price' />
            <br/>
            <input
              type='text'
              name='alcoholContent'
              placeholder='Alcohol Content' />
            <br/>
            <button type='submit'>Add Keg</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;