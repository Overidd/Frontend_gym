import { MapPin, Clock8 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useQueryClient } from "@tanstack/react-query";
import { getByIdLocal } from "@/services/fetchApi"

let isFetchData = 0
export const CardLocal = ({ id, image, name, location, opening_end, opening_start, textBt }) => {

   const navigate = useNavigate()
   const queryClient = useQueryClient()

   const navigatePageDetail = () => {
      navigate(`/locales/${id}`)
   }

   const prefetchData = () => {
      isFetchData += 1
      if (isFetchData == 2) {
         queryClient.prefetchQuery({
            queryKey: ["local", id],
            queryFn: () => getByIdLocal(id),
            staleTime: 1000 * 60 * 60 * 10
         })

         isFetchData = 0
      }

   };

   return (
      <div
         className="bg-[#000] flex flex-col h-[24rem] md:h-[25rem] md:max-w-[22rem] border border-colorYellow rounded-xl overflow-hidden hover_img_card pb-4"
         onMouseEnter={prefetchData}
      // onClick={prefetchData}
      >
         <figure
            className="min-h-[0%] h-[50%] overflow-hidden"
            onClick={navigatePageDetail}
         >
            <img
               className="w-full h-full object-cover object-center cursor-pointer transition duration-300 ease-in-out"
               src={image}
               alt="imagen de una localidad"
            />
         </figure>
         <div className="text-sm md:text-base p-4 space-y-2">
            <p className="text-xl md:text-xl font-medium">
               {name}
            </p>
            <p className="space-x-2">
               <MapPin
                  className="text-colorYellow inline-block align-middle"
                  size={18}
               />
               <span className="font-light align-middle">
                  {location.address}, {location.city}, {location.country}
               </span>
            </p>
            <p className="space-x-2">
               <Clock8
                  className="text-colorYellow inline-block align-middle"
                  size={18}
               />
               <span className="font-light align-middle">
                  {opening_start}am - {opening_end}pm
               </span>
            </p>
         </div>
         <button
            className="bg-colorYellow text-black font-medium md:text-lg uppercase w-fit mx-auto block rounded-3xl animation_btn_1 mt-auto p-1 px-5"
            onClick={navigatePageDetail}
         >
            ¡{textBt}!
         </button>
      </div>
   );
};

const typeLocation = {
   address: PropTypes.string,
   city: PropTypes.string,
   country: PropTypes.string
};

CardLocal.propTypes = {
   id: PropTypes.number,
   image: PropTypes.string,
   name: PropTypes.string,
   location: PropTypes.shape(typeLocation),
   opening_end: PropTypes.string,
   opening_start: PropTypes.string,
   textBt: PropTypes.string
};
