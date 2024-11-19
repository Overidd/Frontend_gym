
export const PayLoading = () => {
   return (
      <div className='space-y-3 bg-[#181d23] w-[24rem] h-[24rem] flex flex-col justify-center text-center rounded-xl'>
         <div className='content_spinner'>
            <div className="spinner p-3">
               <div className='w-[5.5rem] h-[5.5rem] bg-[#181d23]'></div>
            </div>
         </div>
         <br />
         <div className='space-y-2'>
            <p className='uppercase text-xl text-colorGreen'>procesando su pago</p>
            <p className='opacity-90'>No cierre la ventana de su navegador</p>
         </div>
      </div>
   )
}