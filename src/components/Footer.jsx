import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
    <hr />
    <footer className='footer'>
        <div className="footer-text">
        <img src="/img/logos/Logo.png" alt="" />
            <h1 className='footer-title'>Coquette</h1>
        </div>
        <div className="img-footer">
            <Link to={'/'}>
              <img src="/img/logos/LgCircle-fotor.png" alt="" />
            </Link>
        </div>
    </footer>
    <hr />
    <div className="derechos">
        <p> Coquette © 2024 Todos los derechos reservados</p>
    </div>
    </>
  )
}

export default Footer