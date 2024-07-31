// import '../components/ModuleParallax/Parallax.css'
import { Parallax } from 'react-parallax'
import '../components/Topics/Topics.css'

import AOS from 'aos';
import 'aos/dist/aos.css'

import ParallaxHome from '../../public/img/portadas/FondoCat.png'
import Quince from '../components/Topics/Quince'
import Casamientos from '../components/Topics/Casamientos'
import Graduates from './Topics/Graduates'

AOS.init({
    delay: 100,
    duration: 900,
    easing: 'ease'
});

const Hero = () => {
  return (
    <Parallax bgImage={ParallaxHome} strength={400}>
      <div className="catalogue">
        <div className="topics">
            <div className="position-quince" data-aos="fade-up-right">
                <Quince />
            </div>
            <div className="position-casamiento"  data-aos="fade-up-left">
                <Casamientos />
            </div>
            <div className="position-graduates"  data-aos="fade-up-right">
              <Graduates />
            </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Hero