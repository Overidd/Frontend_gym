import PropTypes from "prop-types"


export const ItemServices = ({ data, className }) => {
   return (
      <ul className={`grid grid-cols-3 text-base md:text-xl text-left gap-5 ${className}`}>
         {
            data.map((item) => (
               <li key={item.id} className="space-y-1 xl:space-x-2">
                  {
                     item.icon
                        ? <img
                           className="w-10 h-10 object-contain object-center block md:inline-block align-middle"
                           src={item.icon}
                           alt="icon"
                        />
                        : <div className="bg-colorYellow w-fit inline-block align-middle rounded-xl p-1 px-2">
                           <img
                              className="w-[1.30rem]"
                              src={'/src/assets/icon/rayicon_small.png'} alt="icon"
                           />
                        </div>
                  }
                  <span className="capitalize block xl:inline-block align-middle">
                     {item.name}
                  </span>
               </li>
            ))
         }
      </ul>
   )
}
ItemServices.propTypes = {
   data: PropTypes.array,
   className: PropTypes.string
}