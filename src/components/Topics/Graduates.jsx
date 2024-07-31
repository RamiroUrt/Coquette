import './Topics.css'
import GraduatesPort from '../../../public/img/portadas/graduates.jpg'

const Graduates = () => {
  return (
    <>
        <div className="container-topic">
            <img src={GraduatesPort} alt="" className='img-topic'/>
            <div className="text-topic">
            <h1>graduación</h1>
            </div>
        </div>
    </>
  )
}

export default Graduates