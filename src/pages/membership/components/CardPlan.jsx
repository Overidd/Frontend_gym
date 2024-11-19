import PropTypes from "prop-types";
import { ButtomCuston } from "../../locationDetail/components";

export const CardPlan = ({ data, isBorder, onOpenModalPay }) => {
   const { price, name, description, id } = data;

   return (
      <div className={`w-[20rem] h-[25rem] md:w-[25rem] md:h-[25rem] rounded-xl flex flex-col justify-center gap-10 p-10 ${isBorder
         ? "border border-colorYellow border_card_plan rounded-br-none bg-black text-white"
         : "bg-[#fffa] text-black"
         }`}>
         <p>
            <small className="text-xl md:text-3xl font-medium mr-1">
               ${price}
            </small>
            /mesual
         </p>
         <h5 className="text-2xl font-semibold uppercase">{name}</h5>
         <p>{description}</p>
         <ButtomCuston
            className="w-[14rem] mt-auto uppercase bg-colorYellow text-black py-2 animation_btn_1"
            text="Comprar Ahora"
            onClick={() => onOpenModalPay({ id, price })}
         />
      </div>
   );
};

CardPlan.propTypes = {
   data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
   }).isRequired,
   isBorder: PropTypes.bool,
   onOpenModalPay: PropTypes.func.isRequired,
};
