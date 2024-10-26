import PropTypes from "prop-types"

// object-[10rem_7rem]
export const HeroIconRayo = ({ className, img, positionGradient = 'bg-gradient-to-l' }) => {
   return (
      <figure className={`absolute z-0 opacity-30 select-none ${className}`} >
         <img
            className={`w-full h-full`}
            alt="icono de rayo"
            src={img ? img : '/src/assets/icon/rayoIcon.png'}
            width={120}
         />
         <div className={`absolute inset-0 ${positionGradient} from-black/0 to-black/100`}></div>
      </figure>
   )
}

HeroIconRayo.propTypes = {
   className: PropTypes.string,
   positionGradient: PropTypes.string,
   img: PropTypes.string,
}
