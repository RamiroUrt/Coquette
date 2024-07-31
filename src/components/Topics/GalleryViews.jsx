/* eslint-disable react/prop-types */


import LightboxGallery from '../Card/LightboxGallery';

const GalleryViews = ({ data }) => {
  return (
    <section className="gallery">
      <LightboxGallery data={data}/>
    </section>
  );
};

export default GalleryViews;

