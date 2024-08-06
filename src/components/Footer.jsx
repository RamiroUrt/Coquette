import { Link } from "react-router-dom"

import Logo from '../../public/img/logos/LgCircle-fotor.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = () => {
  return (
    <>
    <hr />
    <footer className='footer'>
        <div className="footer-text">
        <LazyLoadImage
        className="footer-img"
        effect="blur"
        placeholderSrc={Logo}
        src="/img/logos/Logo.webp" alt="" />
            <h1 className='footer-title'>Coquette</h1>
        </div>
        <div className="img-footer">
            <Link to={'/'}>
              <LazyLoadImage
              effect="blur"
              placeholderSrc={Logo}
              src="/img/logos/LgCircle-fotor.webp" alt="" />
            </Link>
        </div>
    </footer>
    <hr />
    <div className="derechos">
        <p> Coquette © 2024 All rights reserved</p>
    </div>
    </>
  )
}

export default Footer