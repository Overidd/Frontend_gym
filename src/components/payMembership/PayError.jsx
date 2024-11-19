export const PayError = () => {
   return (
      <div className='space-y-3 bg-[#181d23] w-[24rem] h-[24rem] flex flex-col justify-center text-center rounded-xl'>
         <div className="container_circle_error">
            <div className="circle-border"></div>
            <div className="circle">
               <div className="error"></div>
            </div>
         </div>
         <br />
         <div className='space-y-2'>
            <h5 className='text-xl uppercase'>Ocurrio un error</h5>
            <p className='opacity-90'>Intente nuevamente</p>
         </div>
      </div >
   )
}
