/* eslint-disable react/prop-types */
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Card from '../../components/Card/Card';

const LightboxGallery = ({ data }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = data.map(image => image.url);

  const handleOpen = (index) => {
    console.log(`Opening lightbox at index ${index}`);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log('Closing lightbox');
    setIsOpen(false);
  };

  return (
    <div className="gallery">
      <div className="cont-gallery">
        <div className="container-gallery">
          {data.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => handleOpen(index)}
              style={{ cursor: 'pointer' }}
            >
              <Card img={image} />
            </div>
          ))}
        </div>
      </div>
      
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={handleClose}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default LightboxGallery;
