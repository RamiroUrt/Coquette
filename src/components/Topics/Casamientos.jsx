import './Topics.css'
import Casamineto from '../../../public/img/portadas/Casamiento.jpg'


const Casamientos = () => {
  return (
    <div className="container-topic">
      <img src={Casamineto} alt="" className='img-topic'/>
        <div className="text-topic">
          <h1>casamientos</h1>
        </div>
    </div>
  )
}

export default Casamientos