import PropTypes from "prop-types"

export const ButtomCuston = ({ className, text, icon, ...props }) => {
   return (
      <button className={`block py-3 px-5 space-x-2 rounded-3xl overflow-hiddem cursor-pointer
      ${className}`}
         {...props}
      >
         <span className="text-base md:text-xl uppercase font-medium md:font-semibold inline-block align-middle ">
            {text}
         </span>

         {
            icon &&
            <span className="inline-block align-middle">
               {icon}
            </span>
         }
      </button>
   )
}
{/* <button className={`hover:animate-pulse w-[14rem] md:w-auto py-1 px-3 md:py-3 md:px-6 space-x-2 rounded-3xl overflow-hiddem ${className}`}></button> */ }
ButtomCuston.propTypes = {
   text: PropTypes.string,
   icon: PropTypes.node,
   className: PropTypes.string,
}