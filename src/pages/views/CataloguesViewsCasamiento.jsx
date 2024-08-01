

import  { useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import ModuleParallax from '../../components/ModuleParallax/ModuleParallax';
import Portada from '../../../public/img/portadas/Vestidos.webp';
import GalleryViews from '../../components/Topics/GalleryViews';

import casamientosData from '../../assets/json/Casamientos.json';

const CataloguesViewsCasamiento = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <> 
      <Nav />
      <ModuleParallax img={Portada} text={'Casamientos'} />
      <GalleryViews data={casamientosData.images}/>
      <Footer />
    </>
  );
};

export default CataloguesViewsCasamiento;
