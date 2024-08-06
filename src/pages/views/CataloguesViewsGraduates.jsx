import  { useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

import ModuleParallax from '../../components/ModuleParallax/ModuleParallax';
import Portada from '../../../public/img/portadas/Catalogue.webp';
import GalleryViews from '../../components/Topics/GalleryViews';

import egresadasData from '../../assets/json/Egresadas.json';

const CataloguesViewsGraduates = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <> 
    <Nav />
    <ModuleParallax img={Portada} text={'Graduation'} />
    <GalleryViews data={egresadasData.images}/>
    <Footer />
  </>
  )
}

export default CataloguesViewsGraduates