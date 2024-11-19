import PropTypes from "prop-types"
import { ButtomCuston } from "../boton/ButtomCuston"


export const TextHeader = ({firstText, lastText, className}) => {
   return (
      <div className={`relative z-10 space-y-5 ${className}`}>
         <p className="text-center xl:text-left xl:text-lg font-light xl:inline-block align-middle mx-auto">
            {
               firstText
            }
            <span className="block font-medium">
               {
                  lastText
               }
            </span>
         </p>
         <ButtomCuston
            className={'align-middle border border-colorGreen text-colorGreen animation_btn_2 w-[17rem] mx-auto lg:float-right'}
            text={'Quiero una asesoría'}
            icon={<img src="/src/assets/icon/whatsapp.svg" />}
         />
      </div>
   )
}

TextHeader.propTypes = {
   firstText: PropTypes.node || PropTypes.string,
   lastText: PropTypes.string,
   className: PropTypes.string,
}