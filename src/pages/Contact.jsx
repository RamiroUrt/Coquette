import Nav from '../components/Nav'
import Footer from "../components/Footer"


import ModuleParallax from '../components/ModuleParallax/ModuleParallax'
import ContactBg from '../../public/img/Contact.webp'
import CotaintMap from '../components/CotaintMap'
import { useEffect } from 'react'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Nav />
    <ModuleParallax img={ContactBg} text={'Contact'}
    />
    <CotaintMap />
    <Footer />
    </>
  )
}

export default Contact