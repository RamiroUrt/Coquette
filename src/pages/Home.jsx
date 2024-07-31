// import ModuleParallax from "../components/ModuleParallax/ModuleParallax"
import Nav from "../components/Nav"
import SectionInfo from "../components/SectionInfo"
// import Hero from "../components/Hero"
import Galery from '../components/Galery'
import Footer from "../components/Footer"
// import ParallaxHome from '../../public/img/ParallaxHome.png'
import Header from "../components/Header"

const Home = () => {
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