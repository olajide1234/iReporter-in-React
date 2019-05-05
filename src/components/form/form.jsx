import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqyytlxwe/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gl5zpyjx';

class Form extends Component {
  state = {
    dateOfIncident: '',
    title: '',
    type: '',
    comment: '',
    images: 'www.null.com',
    videos: 'www.null.com',
    location: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onImageUpload = async (e) => {
    try {
      const file = (e.target.files[0]);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      const { data } = await axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
      });

      this.setState(() => ({ images: data.url }));
    } catch (error) {
      return error;
    }
  }

  onVideoUpload = async (e) => {
    try {
      const file = (e.target.files[0]);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      const { data } = await axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
      });
      this.setState(() => ({ videos: data.url }));
    } catch (error) {
      return error;
    }
  }


  onSubmit = (e) => {
    e.preventDefault();
    const {
      dateOfIncident, title, type, comment, images, videos, location
    } = this.state;
    this.props.onSubmit({
      dateOfIncident,
      title,
      type,
      comment,
      images,
      videos,
      location,
      createdBy: 'default'
    });
  };

  render() {
    return (
      <div>
        <form className="container_formfield" onSubmit={this.onSubmit}>
          <p className="container_formfield_label">Date of incident </p>
          <input
            className="container_formfield--text"
            type="date"
            placeholder="Date of incident"
            onChange={this.onChange}
            name="dateOfIncident"
          />
          <p className="container_formfield_label">Title of incident</p>
          <input
            className="container_formfield--text"
            type="text"
            placeholder="Give a short title"
            onChange={this.onChange}
            name="title"
          />
          <p className="container_formfield_label">Select record type</p>
          <select onChange={this.onChange} name="type" className="container_formfield--text">
            <option value="Default"> Select record type</option>
            <option value="red-flag"> Red-flag</option>
            <option value="intervention">Intervention</option>
          </select>
          <p className="container_formfield_label">Narration of incident</p>
          <textarea
            className="container_formfield--text container_formfield--text--narration"
            type="text"
            placeholder="Tell us what happened"
            onChange={this.onChange}
            name="comment"
          />
          <p className="container_formfield_label">Upload image</p>
          <input
            className="container_formfield--text container_formfield--file"
            type="file"
            placeholder="Add an image"
            onChange={this.onImageUpload}
            name="images"
          />
          <p className="container_formfield_label">Upload video</p>
          <input
            className="container_formfield--text container_formfield--file"
            type="file"
            placeholder="Add a video"
            onChange={this.onVideoUpload}
            name="videos"
          />
          <p className="container_formfield_label">Give location of incident</p>
          <input
            className="container_formfield--location"
            type="text"
            placeholder="Type the location"
            onChange={this.onChange}
            name="location"
          />
          <input
            className="introduction_buttons introduction_buttons--signup-form"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
