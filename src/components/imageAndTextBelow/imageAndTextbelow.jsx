import React from 'react';
import PropTypes from 'prop-types';

const ImageAndTextBelow = (props) => {
  const { header, bottom, image } = props;
  return (
    <div>
      <img className="motivation_box--image" src={`${image}`} alt="small motivational pix" />
      <h3>{header}</h3>
      <p>{bottom}</p>
    </div>
  );
};

ImageAndTextBelow.propTypes = {
  header: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageAndTextBelow;
