import PropTypes from "prop-types"

export const SubTitleCustom = ({ className, first_paragraph, last_paragraph }) => {
   return (
      <div className={`text-balance text-center space-y-2 mt-5 ${className}`}>
         <p className="opacity-90">
            {first_paragraph}
         </p>

         <strong className="block text-colorYellow md:text-2xl font-normal">
            {last_paragraph}
         </strong>
      </div>
   )
}

SubTitleCustom.propTypes = {
   className: PropTypes.string,
   first_paragraph: PropTypes.element || PropTypes.string,
   last_paragraph: PropTypes.string
}
