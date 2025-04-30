import React from 'react';
// import PropTypes from 'prop-types';

const ImageComponent = ({ img, alt, cssClass }) => {
  return (
    <img
      src={img}
      alt="Dynamic img"
      className="rounded-img"
    />
  );
};

// // Prop validation (optional)
// ImageComponent.propTypes = {
//   img: PropTypes.string.isRequired,
// };

export default ImageComponent;
