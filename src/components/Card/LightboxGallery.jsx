/* eslint-disable react/prop-types */
import { useState } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';

import Card from '../../components/Card/Card';

const LightboxGallery = ({ data }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = data.map(image => image.url);

  return (
    <div className="gallery">
      <div className="cont-gallery">
        <div className="container-gallery">
          {data.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
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
          onCloseRequest={() => setIsOpen(false)}
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
