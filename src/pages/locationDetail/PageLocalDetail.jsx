import { useNavigate, useParams } from "react-router-dom"

import portalImage from "@/assets/img/portalLocalDetail.png"
import { MapPin, Clock8, Phone } from "lucide-react";
import { useGetById } from "@/hooks/useGetById";
import PropTypes from "prop-types";
import {
   LocalCarrusel,
   ItemServices,
   ListInformation,
   TitleCustom,
   CardSkeleton,
   HeroIconRayo,
   ErrorComponents,
   ButtomCuston
} from "./components";

const PageLocalDetail = () => {
   const { id } = useParams()
   const { data, isLoading, error } = useGetById(parseInt(id))
   const navigate = useNavigate()

   if (error?.message) {
      navigate('/locales', { replace: true })
      return (
         <ErrorComponents
            codeStatus={error?.status}
            message={error?.message}
         />
      )
   }

   return (
      <main className="text-white min-h-[100dvh]">
         <figure className="relative w-full md:h-[28dvh]">
            <img
               className="w-full h-full object-cover object-center"
               alt="imagen de portada"
               src={portalImage}
            />
            <TitleCustom
               className={'absolute inset-0 h-fit text-[1.4rem] m-auto space-x-2'}
               textPrimary={'Dalanceflow'}
               textSecondary={'Wellness center'}
               isLineTitle={true}
            />
         </figure>

         <div className="relative w-minimum-page max-w-maximum-page bg-radial-gradient2 mx-auto py-8 md:py-14 space-y-8 md:space-y-12">
            <LinerAndText
               text={'Dónde vas a entrenar'}
               widthBarra={'10%'}
            />
            <section className="relative z-10 grid md:grid-cols-2 auto-rows-[17rem_auto] md:auto-rows-[27rem_auto] gap-x-20 gap-y-7" >
               {
                  isLoading
                     ? <CardSkeleton />
                     : <LocalCarrusel
                        className="overflow-hidden md:overflow-visible md:w-[90%] xl:w-[100%] md:mx-auto"
                        images={data.images}
                     />
               }
               {
                  isLoading
                     ? <CardSkeleton className={"row-span-2"} />
                     : <div className="space-y-8 row-span-2">
                        <h2 className="text-xl md:text-3xl font-medium uppercase tracking-wide">
                           {data.name}
                        </h2>
                        <p className="md:text-lg font-light">
                           {
                              data?.description && data.description
                           }
                        </p>
                        <ul className="md:text-lg font-light space-y-2">
                           <ListInformation
                              iconComponet={<MapPin />}
                              text={`${data.location.address}, ${data.location.city}, ${data.location.country}`}
                           />
                           <ListInformation
                              iconComponet={<Clock8 />}
                              text={`${data.opening_start.substring(0, 5)}am - ${data.opening_end.substring(0, 5)}pm`}
                           />
                           <ListInformation
                              iconComponet={<Phone />}
                              text={`${data.phone.substring(0, 3)} ${data.phone.substring(3, 6)} ${data.phone.substring(6)}`}
                           />
                        </ul>
                        <ItemServices data={data.clases} />
                     </div>
               }
               {
                  isLoading
                     ? <CardSkeleton className={"h-[3rem]"} />
                     : <ItemServices data={data.services} className={'row-span-1'} />
               }
            </section>

            <section className="relative z-10 space-y-5">
               <LinerAndText
                  text={'Elige tu plan'}
                  widthBarra={'9%'}
               />

               {/*TODO  Aqui deberia ir el componente de precios */}

            </section>
            <section className="relative z-10 space-y-5">
               <p className="md:w-[75%] xl:w-[77%] text-center xl:text-left xl:text-lg font-light xl:inline-block align-middle mx-auto">
                  Todos nuestros planes de suscripción están sujetos a modificaciones sin previo aviso. <br className="hidden md:block" />
                  Los precios y las condiciones pueden variar para garantizar que sigamos ofreciendo servicios de la más alta calidad.
                  <span className="block font-medium">
                     Te recomendamos consultar regularmente para estar al tanto de cualquier actualización.
                  </span>
               </p>
               <ButtomCuston
                  className={'align-middle border border-colorGreen text-colorGreen animation_btn_2 block xl:inline-block m-auto'}
                  text={'Quiero una asesoría'}
                  icon={<img src="/src/assets/icon/whatsapp.svg" />}
               />
            </section>
            <div className="absolute inset-0 overflow-hidden 2xl:overflow-visible">
               <HeroIconRayo
                  className={'-right-40 top-0 w-[35rem] opacity-[0.20]'}
                  positionGradient="bg-gradient-to-r"
               />
            </div>
         </div>
      </main>
   )
}

export default PageLocalDetail
const LinerAndText = ({ text, widthBarra }) => {
   return (
      <div>
         <div
            className={`h-1 bg-colorYellow rounded-xl mb-4`}
            style={{ width: widthBarra }}
         ></div>
         <span className="text-xl md:text-3xl font-medium uppercase">
            {text}
         </span>
      </div>
   )
}
LinerAndText.propTypes = {
   text: PropTypes.string,
   widthBarra: PropTypes.string
}

