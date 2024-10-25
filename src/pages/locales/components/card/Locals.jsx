import { useLocales } from "@/hooks/useLocales";
import { CardLocal } from "./CardLocal"
import { CardSkeletonLocal } from "@/components/landing/cards/CardSkeletons";
import { CustomPagination } from "../paginate/CustomPagination";

export const Locals = () => {
   const { localesQuery } = useLocales();
   return (
      <div className="w-full flex flex-col gap-10 min-h-[60dvh]">
         <section
            className="flex-1 grid gap-4 grid-cols-auto-fit-card-local xl:grid-cols-3"
         >
            {
               localesQuery.isLoading
                  ? Array.from({ length: 6 }).map((_, index) => <CardSkeletonLocal key={index} />)
                  : localesQuery.data.locals.length === 0
                     ? <LocalNotFound />
                     : localesQuery.data.locals.map((local) => (
                        <CardLocal
                           key={local.id}
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