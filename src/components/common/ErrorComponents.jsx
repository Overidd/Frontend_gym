import PropTypes from "prop-types"
const ErrorStyles = ({ name, code }) => {
   return (
      <div className='select-none h-[100dvh] bg-black text-white flex flex-col items-center justify-center gap-4'>
         <small className='text-8xl font-bold text-white'>
            {code}
         </small>
         <p className='text-2xl'>
            {name}
         </p>
      </div>
   )
}

ErrorStyles.propTypes = {
   code: PropTypes.number.isRequired,
   name: PropTypes.string
}
export const ErrorComponents = ({ codeStatus, message }) => {
   let code = parseInt(codeStatus)
   let messageInternal = message

   if (isNaN(code)) {
      code = 500
   }
   if (typeof message !== 'string' || message === '') {
      messageInternal = 'Internal Server Error'
   }

   if (parseInt(code) === 404) {
      return (
         <ErrorStyles
            code={404}
            name={messageInternal}
         />
      )
   }
   if (parseInt(code) === 500) {
      return (
         <ErrorStyles
            code={500}
            name={messageInternal}
         />
      )
   }
   return (
      <ErrorStyles
         code={code}
         name={messageInternal}
      />
   )
}

ErrorComponents.propTypes = {
   codeStatus: PropTypes.string || PropTypes.number,
   message: PropTypes.string
}