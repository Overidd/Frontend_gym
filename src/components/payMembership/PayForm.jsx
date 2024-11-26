import { CircleUserRound, Mail, User } from "lucide-react"
import PropTypes from "prop-types"

export const PayForm = ({ handleForm }) => {
   return (
      <form
         className='text-[#000c] font-semibold space-y-3 text-left'
         onChange={handleForm}
      >
         <fieldset
            className='bg-white p-2 rounded-xl space-x-2'
            id='first_name_input'
         >
            <User
               className='hidden md:inline-block align-middle opacity-70'
               strokeWidth={2}
            />
            <input
               className='w-[80%] align-middle outline-none'
               type="text"
               placeholder="Nombre"
               name='first_name'
               required
            />
         </fieldset>
         <fieldset
            className='bg-white p-2 rounded-xl space-x-2'
            id='last_name_input'
         >
            <CircleUserRound
               className='hidden md:inline-block align-middle opacity-70'
               strokeWidth={2}
            />
            <input
               className='w-[80%] align-middle outline-none'
               type="text"
               placeholder="Apellido"
               name='last_name'
               required
            />
         </fieldset>
         <fieldset
            className='bg-white p-2 rounded-xl space-x-2'
            id='email_input'
         >
            <Mail
               className='hidden md:inline-block align-middle opacity-70'
               strokeWidth={2}
            />
            <input
               className='w-[80%] align-middle outline-none'
               type="email"
               placeholder="Correo"
               name='email'
               required
            />
         </fieldset>
      </form>
   )
}


PayForm.propTypes = {
   handleForm: PropTypes.func
}
