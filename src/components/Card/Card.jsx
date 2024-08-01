// /* eslint-disable react/prop-types */

// import AOS from 'aos';
// import 'aos/dist/aos.css'

// import '../Topics/Topics.css';
// import Logo from '../../../public/img/logos/LgCircle-fotor.png'

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import { useEffect } from 'react';


// const Card = ({ img }) => {

//   useEffect(() => {
//     AOS.init({
//       delay: 100,
//       duration: 900,
//       easing: 'ease',
//     });
//     AOS.refresh();
//   },[])

//   return (
//     <div className="container-topic gallery-card"  data-aos="zoom-in-up">
//       <LazyLoadImage
//         src={img.url} 
//         alt={img.name}
//         effect='blur'
//         placeholderSrc={Logo}
//         threshold={200}
//         />
//     </div>
//   );
// };

// export default Card;


/* eslint-disable react/prop-types */

import '../Topics/Topics.css';
import Logo from '../../../public/img/logos/LgCircle-fotor.webp';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ img }) => {
  return (
    <div className="container-topic gallery-card" data-aos="zoom-in-up">
      <LazyLoadImage
        src={img.url}
        alt={img.name}
        effect="blur"
        placeholderSrc={Logo}
        threshold={200}
        className="lazy"
      />
    </div>
  );
};

export default Card;
