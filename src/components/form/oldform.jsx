import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  state = {
    dateOfIncident: ''
  };

  render() {
    const { data } = this.props;
    const FormBody = () => data.map(data => (
      <input
          key={data.placeholder}
          className={data.className}
          type={data.type}
          placeholder={data.placeholder}
        />
    ));

    return (
      <div className="container_form">
        <form className="container_formfield">
          <FormBody />
          <input
            className="introduction_buttons introduction_buttons--signup-form"
            type="submit"
            value={data[0].buttonText}
          />
          <p className="container_formfield--redirectlinktext">
            {data[0].bottomText}
            <Link
              className="container_formfield--redirectlinktext container_formfield--redirectlink"
              to={data[0].bottomLinkLocation}
            >
              {data[0].bottomLinkText}
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Form;
