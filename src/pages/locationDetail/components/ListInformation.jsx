import PropTypes from "prop-types"

export const ListInformation = ({ iconComponet, text }) => {
   return (
      <li>
         <div className="inline-block align-middle mr-2 text-colorYellow" >
            {iconComponet}
         </div>
         <span className="align-middle">
            {text}
         </span>
      </li>
   )
}

ListInformation.propTypes = {
   iconComponet: PropTypes.node,
   text: PropTypes.string,
}