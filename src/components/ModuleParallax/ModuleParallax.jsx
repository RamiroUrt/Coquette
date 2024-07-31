/* eslint-disable react/prop-types */
import './Parallax.css'

import { Parallax } from 'react-parallax'
const ModuleParallax = ({ img, text}) => {

  return (
    <div className="">
      <Parallax bgImage={img} className='cover' strength={400}>
        <div className="h-[80vh] cover">
        <div className="text-topic">
            <h1 className='responsive-text'>{text}</h1>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default ModuleParallax