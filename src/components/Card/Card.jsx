/* eslint-disable react/prop-types */

import AOS from 'aos';
import 'aos/dist/aos.css'

import '../Topics/Topics.css';

AOS.init({
  delay: 100,
  duration: 900,
  easing: 'ease'
});

const Card = ({ img }) => {
  return (
    <div className="container-topic gallery-card"  data-aos="zoom-in-up">
      <img src={img.url} alt={img.name} />
    </div>
  );
};

export default Card;
