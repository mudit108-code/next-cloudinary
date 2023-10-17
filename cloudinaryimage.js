import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CloudinaryImage extends Component {
  render() {
    const { cloudName, publicId, alt, placeholderSrc } = this.props;

    if (!cloudName && !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      console.error("Cloud name is not configured. Set it via NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME or the 'cloudName' prop.");
      return placeholderSrc ? (
        <img src={placeholderSrc} alt={alt} />
      ) : null;
    }

    const cloudNameToUse = cloudName || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!publicId) {
      console.error("Public ID is not provided. Make sure to set the 'publicId' prop.");
      return placeholderSrc ? (
        <img src={placeholderSrc} alt={alt} />
      ) : null;
    }

    return (
      <img src={`https://res.cloudinary.com/${cloudNameToUse}/image/upload/${publicId}`} alt={alt} />
    );
  }
}

CloudinaryImage.propTypes = {
  cloudName: PropTypes.string, // Cloudinary cloud name
  publicId: PropTypes.string.isRequired, // Public ID of the image
  alt: PropTypes.string, // Alt text for the image
  placeholderSrc: PropTypes.string, // URL of a placeholder image
};

export default CloudinaryImage;
