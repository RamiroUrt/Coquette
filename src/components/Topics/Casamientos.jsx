import './Topics.css'
import Casamineto from '../../../public/img/portadas/Casamiento.webp'


const Casamientos = () => {
  return (
    <div className="container-topic">
      <img src={Casamineto} alt="" className='img-topic'/>
        <div className="text-topic">
          <h1>weddings</h1>
        </div>
    </div>
  )
}

export default Casamientos