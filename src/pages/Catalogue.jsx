import Nav from '../components/Nav'
import Footer from "../components/Footer"

import { useEffect } from 'react';

import ModuleParallax from '../components/ModuleParallax/ModuleParallax'
import FotCatalogue from '../../public/img/ParallaxHome.webp'
import Catalogues from '../components/Catalogues'

const Catalogue = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Nav />
    <ModuleParallax img={FotCatalogue} text={'Catalogue'}
    />
    <Catalogues />
    <Footer />
    </>
  )
}

export default Catalogue