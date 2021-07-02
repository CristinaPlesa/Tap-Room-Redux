import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      birdMake: event.target.birdMake.value,
      birdModel: event.target.birdModel.value,
      birdColor: event.target.birdColor.value,
      beakSize: event.target.beakSize.value,
      beakColor: event.target.beakColor.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
      </form>
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;