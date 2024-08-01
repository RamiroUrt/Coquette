import  { useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

import ModuleParallax from '../../components/ModuleParallax/ModuleParallax';
import Portada from '../../../public/img/portadas/PortadaQuince.webp';
import GalleryViews from '../../components/Topics/GalleryViews';


import quinceData from '../../assets/json/Quince.json';

const CataloguesViewsQuinceaños = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <> 
    <Nav />
    <ModuleParallax img={Portada} text={'Quinceaños'} />
    <GalleryViews data={quinceData.images}/>
    <Footer />
  </>
  )
}

export default CataloguesViewsQuinceaños