
import InstagramSvg from '../assets/svg/InstagramSvg'
import WhatsappSvg from '../assets/svg/WhatsappSvg'
import FacebookSvg from '../assets/svg/FacebookSvg'
import EmailSvg from '../assets/svg/EmailSvg'
import TwitterSvg from '../assets/svg/TwitterSvg'
import { Marker, TileLayer, MapContainer } from 'react-leaflet'
import { Icon } from 'leaflet'



const position = [-34.602641, -58.466618]
        
const customIcon  = new Icon({
    iconUrl: '/img/logos/LgCircle-fotor.webp',
    iconSize: [30, 30],
});

const CotaintMap = () => {
  return (
    <>

    <section className="contain-map">
        <div>
            <h1 className="map-title">¿Donde encontrarnos?</h1>
        </div>
        <div className="map">
            <MapContainer center={position} zoom={40} scrollWheelZoom={true}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={customIcon}></Marker>
            </MapContainer>
        </div>
        <div className="map-description">
            <p>Av. S. Martín 2936</p>
        </div>
        <div className="map-redes">
            <h1 className="map-title">Networks</h1>
        </div>
        <div className="links-redes">
            <div className="ig cursor-pointer">
                <InstagramSvg/>
            </div>
            <div className="wspp cursor-pointer">
                <WhatsappSvg />
            </div>
            <div className="face cursor-pointer">
                <FacebookSvg />
            </div>
            <div className="email cursor-pointer">
                <EmailSvg />
            </div>
            <div className="twitter cursor-pointer">
                <TwitterSvg />
            </div>
        </div>
    </section>
    </>
  )
}

export default CotaintMap