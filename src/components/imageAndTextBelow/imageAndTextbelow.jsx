import React from 'react';

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

export default ImageAndTextBelow;
