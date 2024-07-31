import { Parallax } from 'react-parallax'
import LogoCircle from '../../public/img/logos/LgCircle-fotor.png'

import Atropos from 'atropos/react';
import ParticlesBackground from './ParticlesBg/ParticlesBackground';

import Logo from '../../public/img/logos/LgCircle-fotor.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = () => {
  return (
      <header className=''>
    <ParticlesBackground /> 
        <Parallax strength={800}>
                <div className='contain-circle'>
                <Atropos
                 className="my-atropos"
                shadow={false}
                
                >
                    <LazyLoadImage
                    effect="blur"
                    placeholderSrc={Logo}
                     src={LogoCircle} alt="" className='contain-img' />
                </Atropos>
                    <div className="tables">
                        <div className="table">
                        </div>
                        <div className="table2">
                        </div>
                        <div className="table3">
                        </div>
                    </div>
                </div>
        </Parallax>
        </header>
  )
}

export default Header