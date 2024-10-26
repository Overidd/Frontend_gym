import { useState } from 'react';
import {
   ButtomCuston,
   Locals,
   FiltroLocal,
   InputSearch,
   TitleCustom,
   HeroIconRayo
} from './components';

const PageLocales = () => {

   const [isError, setIsError] = useState(false)
   if (isError) {
      return (
         <div className='fixed z-10 inset-0 bg-black text-white flex flex-col items-center justify-center gap-4'>
            <small className='text-8xl font-bold'>
               500
            </small>
            <p className='text-2xl'>
               Internal Server Error
            </p>
         </div>
      )
   }
   const handleErrorServer = () => {
      setIsError(true)
   }

   return (
      <main className="relative text-white w-[90%] max-w-[80rem] min-h-[100dvh] mx-auto overflow-hidden bg-radial-gradient space-y-16 pb-10">
         <HeroIconRayo
            className={'md:-left-5 w-[20rem] md:w-[42rem] md:h-[43rem] opacity-25'}
         />

         <section className="relative mt-24 space-y-8">
            <TitleCustom
               textPrimary={'Descubre nuestras'}
               textSecondary={'Localidades'}
            />
            <div className="md:text-[1.20rem] text-center text-balance space-y-2">
               <p>
                  Encuentra el gimnasio perfecto según tus preferencias. Ya sea que busques clases de baile, sesiones de Zumba llenas de energía, entrenamiento personalizado con un coach o un lugar para levantar pesas, nuestras localidades tienen todo lo que necesitas.
               </p>
               <p className="text-colorYellow md:text-2xl">
                  Filtra por categoría y accede a entrenamientos diseñados para alcanzar tu vida fitness
               </p>
            </div>
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