import './Topics.css'
import Quinciañera from '../../../public/img/portadas/Quinciañera.jpg'

const Quince = () => {
  return (
        <div className="container-topic">
            <img src={Quinciañera} alt="" className='img-topic'/>
            <div className="text-topic">
              <h1>quinceaños</h1>
            </div>
        </div>
  )
}

export default Quince