import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PropTypes from 'prop-types';
import './carousel.css';
import { useEffect } from 'react';

export const CustomSliderGeneral = ({ data = [], ChildComponent, speed, className, isBorder }) => {
   const options = {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pagination: true,
      arrows: true,
      speed: speed || 500,
   };

   useEffect(() => {
      const containerSplide = window.document.querySelector(`.splide__track`)
      // const containerSplide = splide.current.splideRef.current.children[1];
      if (isBorder) {
         containerSplide.style.borderRadius = '8px';
         containerSplide.style.outline = 'solid';
         containerSplide.style.outlineColor = '#fcad31';
      } else {
         containerSplide.style.outline = 'none';
         containerSplide.style.borderRadius = '0px';
      }
   }, [isBorder])

   return (
      <Splide
         className={`w-full h-full ${className}`}
         options={options}
      >
         {
            data.map((item) => (
               <SplideSlide key={item.id}>
                  <ChildComponent {...item} />
               </SplideSlide>
            ))
         }
      </Splide>
   )
}

CustomSliderGeneral.propTypes = {
   data: PropTypes.array.isRequired,
   ChildComponent: PropTypes.elementType.isRequired,
   speed: PropTypes.number,
   className: PropTypes.string,
   isBorder: PropTypes.bool
}   