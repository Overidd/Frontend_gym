import { SubTitleCustom } from "../../components/texts/SubTitleCustom"
import { TextHeader } from "../../components/texts/TextHeader"
import { TitleCustom } from "../../components/texts/TitleCustom"
import { HeroIconRayo } from "../location/components"
import { Plan } from "./components/Plan"

const Memberships = () => {
   return (
      <main className="relative text-white w-minimum-page max-w-maximum-page min-h-[100dvh] overflow-hidden bg-radial-gradient mx-auto pb-10 flex flex-col gap-10">
         <HeroIconRayo />

         <section className="relative mt-14">
            <TitleCustom
               textPrimary={'Nuestros'}
               textSecondary={'Planes'}
            />

            <SubTitleCustom
               first_paragraph={<>Elige el plan que mejor se adapta a tu estilo de vida. Con opciones flexibles, te ofrecemos la oportunidad de acceder a nuestras <br />instalaciones premium y entrenadores especializados por el tiempo que prefieras.
               </>}
               last_paragraph={'Disfruta de un entrenamiento sin límites en todas nuestras localidades'}
            />
         </section>

         <section className="relative mx-auton">
            <Plan />
         </section>

         <TextHeader
            className={'mt-auto'}
            firstText={<>
               Todos nuestros planes de suscripción están sujetos a modificaciones sin previo aviso. <br />
               Los precios y las condiciones pueden variar para garantizar que sigamos ofreciendo servicios de la más alta calidad
            </>}
            lastText={'Te recomendamos consultar regularmente para estar al tanto de cualquier actualización.'}
         />
      </main>
   )
}

export default Memberships
