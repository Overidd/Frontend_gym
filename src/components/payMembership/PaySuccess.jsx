
import { Link } from 'react-router-dom'

export const PaySuccess = () => {
   return (
      <div className='space-y-3 bg-[#181d23] w-[24rem] h-[24rem] flex flex-col justify-center text-center rounded-xl'>
         <div className="success-checkmark">
            <div className="check-icon">
               <span className="icon-line line-tip"></span>
               <span className="icon-line line-long"></span>
               <div className="icon-circle"></div>
               <div className="icon-fix"></div>
            </div>
         </div>
         <br />
         <div className='space-y-2'>
            <h5 className='text-xl'>¡Gracias por su compra!</h5>
            <p className='opacity-90'>Su pago ha sido exitoso</p>
            <button className='bg-[#6f68b6] hover:bg-[#877fdbe1] transition-all rounded-xl py-2 px-10'>
               <Link to={'/locales'}>
                  Continuar comprando
               </Link>
            </button>
            <a className='w-fit text-base block border-b border-[#fff] mx-auto'
               href="#"
            >
               Descargar factura
            </a>
         </div>
      </div>
   )
}
