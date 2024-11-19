import PropTypes from 'prop-types';

export const TitleCustom = ({ textPrimary, textSecondary, isLineTitle = false, className }) => {
   return (
      <h1 className={`w-fit mx-auto text-center font-medium text-3xl md:text-5xl uppercase md:leading-[3.5rem] ${className}`}>
         <span
            className={`${isLineTitle ? ' tracking-normal' : 'block'} text-white`}
            // style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}
         >
            {textPrimary}
         </span>
         <span
            className={`text-colorYellow`}
            // style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}
         >
            {textSecondary}
         </span>
      </h1>
   );
};

TitleCustom.propTypes = {
   textPrimary: PropTypes.string.isRequired,
   textSecondary: PropTypes.string.isRequired,
   isLineTitle: PropTypes.bool,
   className: PropTypes.string,
};


