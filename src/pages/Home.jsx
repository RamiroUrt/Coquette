// import ModuleParallax from "../components/ModuleParallax/ModuleParallax"
import Nav from "../components/Nav"
import SectionInfo from "../components/SectionInfo"
// import Hero from "../components/Hero"
import Galery from '../components/Galery'
import Footer from "../components/Footer"
// import ParallaxHome from '../../public/img/ParallaxHome.png'
import Header from "../components/Header"
import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      {/* <ModuleParallax img={ParallaxHome} /> */}
      <Header />
      <SectionInfo />
      {/* <Hero /> */}
      <Galery />
      <Footer />
    </>
  )
}

export default Home