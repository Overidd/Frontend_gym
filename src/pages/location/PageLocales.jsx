import { useState } from 'react';
import {
   ButtomCuston,
   Locals,
   FiltroLocal,
   InputSearch,
   TitleCustom,
   HeroIconRayo
} from './components';
import { ErrorComponents } from '../locationDetail/components';
import { SubTitleCustom } from '../../components/texts/SubTitleCustom';

const PageLocales = () => {

   const [isError, setIsError] = useState(false)
   if (isError) {
      return (
         <ErrorComponents
            codeStatus={500}
            message={'Internal Server Error'}
         />
      )
   }
   const handleErrorServer = () => {
      setIsError(true)
   }

   return (
      <main className="relative text-white w-minimum-page max-w-maximum-page min-h-[100dvh] mx-auto overflow-hidden bg-radial-gradient flex flex-col gap-10 pb-10">
         <HeroIconRayo
            className={'md:-left-5 w-[20rem] md:w-[37rem] md:h-[45rem] opacity-25'}
         />

         <section className="relative mt-14">
            <TitleCustom
               textPrimary={'Descubre nuestras'}
               textSecondary={'Localidades'}
            />
            <SubTitleCustom
               first_paragraph={'Encuentra el gimnasio perfecto según tus preferencias. Ya sea que busques clases de baile, sesiones de Zumba llenas de energía, entrenamiento personalizado con un coach o un lugar para levantar pesas, nuestras localidades tienen todo lo que necesitas.'}
               last_paragraph={'Filtra por categoría y accede a entrenamientos diseñados para alcanzar tu vida fitness'}
            />
         </section>

         <section className="relative md:text-xl flex items-center justify-between">
            <label
               className="xl:text-2xl md:font-medium hidden xl:block"
               htmlFor='search'
            >
               ¿Dónde quieres entrenar?
            </label>
            <InputSearch className={'xl:w-[75%]'} />
         </section>

         <section className="relative flex flex-col lg:flex-row gap-5 xl:gap-0">
            <FiltroLocal />
            <Locals handleErrorServer={handleErrorServer} />
         </section>

         <section className="lg:ml-auto lg:w-[74%] xl:w-[80%] flex flex-col md:flex-row gap-4 justify-center items-center">
            <ButtomCuston
               className={'bg-colorYellow text-black animation_btn_1'}
               text={'Ver todos los locales'}
               icon={<img src="./src/assets/icon/rayicon_small.svg" alt="icon ray" />}
            />
            <ButtomCuston
               className={'text-colorGreen border border-colorGreen animation_btn_2'}
               text={'Quiero una asesoría'}
               icon={<img src="./src/assets/icon/whatsapp.svg" alt="icon whatsapp" />}
            />
         </section>
      </main>
   )
}
export default PageLocales