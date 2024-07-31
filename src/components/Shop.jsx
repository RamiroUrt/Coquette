import { Parallax } from 'react-parallax'
import '../components/ModuleParallax/Parallax.css'

import Bground from '../../public/img/portadas/FondoCat.png'

import Casamientos from './Topics/Casamientos'
import Graduates from './Topics/Graduates'
import Quince from './Topics/Quince'

import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link, Outlet } from 'react-router-dom'

AOS.init({
  delay: 100,
  duration: 900,
  easing: 'ease'
});

const Shop = () => {
  return (
    <>
      <section className="shop">
        <Parallax bgImage={Bground} strength={400}>
                  <div className="section-topic">
                    <div className="" data-aos="zoom-in-up">
                      <Link to='/catalogues-casamiento'>
                        <Casamientos />
                      </Link>
                    </div>
                    <div className="" data-aos="zoom-in-up">
                      <Link to='/catalogues-graduacion'>
                        <Graduates/>
                      </Link>
                    </div>
                    <div className="" data-aos="zoom-in-up">
                      <Link to={'/catalogues-quinceaños'}>
                        <Quince />
                      </Link>
                    </div>
                  </div>
        </Parallax>
      </section>
      <Outlet />
    </>
  )
}

export default Shop