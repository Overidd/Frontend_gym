
import { useState } from "react";
import PropTypes from "prop-types";
import { CustomSliderGeneral } from ".";

export const LocalCarrusel = ({ images,className }) => {
   const [transformOrigin, setTransformOrigin] = useState('0% 0%');

   const handleMouseMove = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left; // Posición X del mouse dentro de la img
      const y = event.clientY - rect.top;  // Posición Y del mouse dentro de la img

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      setTransformOrigin(`${xPercent}% ${yPercent}%`);
   };

   const imagesComponent = ({ image }) => {
      return (
         <img
            className="cursor-pointer object-cover object-center animation_zoom_img h-full w-full"
            alt="imagen de un gimnasio"
            src={image}
            style={{
               transformOrigin: transformOrigin,
               // objectFit: 'cover',
            }}
            onMouseMove={handleMouseMove}
         />
      )
   }

   return (
      <CustomSliderGeneral
         className={className}
         data={images}
         ChildComponent={imagesComponent}
         isBorder={true}
      />
   )
}
LocalCarrusel.propTypes = {
   images: PropTypes.array,
   className: PropTypes.string
}

