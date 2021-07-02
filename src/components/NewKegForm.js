import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <div class="container-fluid">
        <div class="card">
          <form onSubmit={handleNewKegFormSubmission}>
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
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;