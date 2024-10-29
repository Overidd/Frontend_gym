import { useLocales } from "@/hooks/useLocales";
import PropTypes from "prop-types";

import { CustomPagination } from "../paginate/CustomPagination";
import { CardSkeleton } from "../index";
import { CardLocal } from "./CardLocal"

export const Locals = ({ handleErrorServer }) => {
   const { localesQuery } = useLocales();

   if (localesQuery.error) {
      handleErrorServer()
   }

   return (
      <div className="w-full flex flex-col gap-10 min-h-[60dvh]">
         <section
            className="flex-1 grid gap-4 grid-cols-auto-fit-card-local xl:grid-cols-3"
         >
            {
               localesQuery.isLoading
                  ? Array.from({ length: 3 }).map((_, index) => (
                     <CardSkeleton key={index} className={'h-[23rem] md:h-[25rem]'} />
                  ))
                  : localesQuery.data.locals.length === 0
                     ? <LocalNotFound />
                     : localesQuery.data.locals.map((local) => (
                        <CardLocal
                           key={local.id}
                           id={local.id}
                           image={local.image}
                           location={local.location}
                           name={local.name}
                           opening_end={local.opening_end}
                           opening_start={local.opening_start}
                           textBt={'Inscríbete ya'}
                        />
                     ))
            }
         </section>

         <section className="mt-auto w-fit mx-auto">
            <CustomPagination localesQuery={localesQuery} />
         </section>
      </div>
   )
}
Locals.propTypes = {
   handleErrorServer: PropTypes.func
}

const LocalNotFound = () => {
   return (
      <div className="mt-8 w-fit xl:col-span-3 text-center space-y-4 mx-auto">
         <img
            className="mx-auto md:w-[15rem]"
            src="./src/assets/img/localNoFound.webp"
            alt="imagen no encontrado" />
         <p className="text-lg">
            No pudimos encontrar gimnasios disponibles
         </p>
      </div>
   )
}