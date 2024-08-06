
import Shipping from './Carrousel/Shipping';
import Saw from './Carrousel/Saw';
import Card from './Carrousel/Card';
import Contact from './Carrousel/Contact';
import useDraggableScroll from '../hooks/useDraggableScroll'; // Ajusta la ruta según la ubicación del hook

const SectionInfo = () => {
  const { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove } = useDraggableScroll();

  return (
    <div className='section-info'>
      <div
        className="carrousel"
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="shipping-cont">
          <Shipping />
        </div>
        <div className="custom-cont">
          <Saw />
        </div>
        <div className="card-cont">
          <Card />
        </div>
        <div className="contact-cont">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;

