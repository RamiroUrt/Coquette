import Nav from '../components/Nav'
import Footer from "../components/Footer"


import ModuleParallax from '../components/ModuleParallax/ModuleParallax'
import ContactBg from '../../public/img/Contact.jpg'
import CotaintMap from '../components/CotaintMap'

const Contact = () => {
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