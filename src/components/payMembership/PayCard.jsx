import PropTypes from 'prop-types';
import { memo, useEffect, useRef, useState } from 'react';
import { useSubscription } from '../../hooks/useSubscription';
import { PayLoading, PaySuccess, PayError, PayForm } from '.';

const validateInput = (...form) => {
   const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
   };

   const handleValidation = (condition, inputId) => {
      const element = document.getElementById(inputId);
      if (condition) {
         element.classList.add('is_invalid_input');
         element.classList.remove('is_valid_input');
         return false;
      } else {
         element.classList.remove('is_invalid_input');
         element.classList.add('is_valid_input');
         return true;
      }
   };
   for (let i = 0; i < form.length; i++) {
      const name = Object.keys(form[i])[0];
      const value = Object.values(form[i])[0];
      if (name === 'first_name') {
         const condition = value.trim().length < 3;
         if (!handleValidation(condition, 'first_name_input')) return false;
      }
      if (name === 'last_name') {
         const condition = value.trim().length < 3;
         if (!handleValidation(condition, 'last_name_input')) return false;
      }
      if (name === 'email') {
         const condition = !isValidEmail(value);
         if (!handleValidation(condition, 'email_input')) return false;
      }
   }
   return true;
};

export const PayMembershipCard = memo(({ membershipId, price, closeDialog }) => {
   const { createPlanMutation,
      subscriptionSuccessMutation,
      cancelSubscriptionMutation
   } = useSubscription()

   const [formValue, setform] = useState({
      first_name: '',
      last_name: '',
      email: '',
   })

   const formValueRef = useRef(formValue);
   const paypalRef = useRef(null);
   formValueRef.current = formValue;

   useEffect(() => {
      const loadPayPalScript = () => {
         if (window.paypal) {
            renderPayPalButton();
         } else {
            const script = document.createElement("script");
            script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_CLIENT_ID_PAYPAL}&vault=true&intent=subscription`;
            script.async = true;
            script.onload = renderPayPalButton;
            document.body.appendChild(script);
         }
      };

      const renderPayPalButton = () => {
         // Verifica si ya existe contenido en paypalRef.current
         if (paypalRef.current && paypalRef.current.innerHTML !== "") {
            paypalRef.current.innerHTML = ""; // Limpia el contenedor
         }
         window.paypal.Buttons({
            style: {
               shape: "rect",
               layout: "vertical",
               color: "gold",
               label: "paypal",
            },
            createSubscription: async function (data, actions) {
               const { first_name, last_name, email } = formValueRef.current;
               if (!validateInput(
                  { 'first_name': first_name },
                  { 'last_name': last_name },
                  { 'email': email })
               ) {
                  return false
               };
               try {
                  const planId = await createPlanMutation.mutateAsync(membershipId)
                  window.localStorage.setItem('planId', planId);
                  return actions.subscription.create({
                     plan_id: planId,
                     subscriber: {
                        name: {
                           given_name: first_name,
                           surname: last_name,
                        },
                        email_address: email,
                     },
                  });
               } catch (error) {
                  return error
               }
            },

            onApprove: async function (data) {
               window.localStorage.removeItem('planId');
               await subscriptionSuccessMutation.mutateAsync({
                  subscriptionID: data.subscriptionID,
                  userData: {
                     first_name: formValueRef.current.first_name,
                     last_name: formValueRef.current.last_name,
                     email: formValueRef.current.email,
                  },
               });
            },
            onCancel: async function () {
               const planId = window.localStorage.getItem('planId');
               await cancelSubscriptionMutation.mutateAsync(planId);
               window.localStorage.removeItem('planId');
            },
            onError: function () {
            }
         }).render(paypalRef.current);
      }
      loadPayPalScript();
   }, [])

   const handleForm = (e) => {
      validateInput({ [e.target.name]: e.target.value })
      setform({
         ...formValue,
         [e.target.name]: e.target.value
      })
   }

   const handleCloseModalPay = (e) => {
      if (e.target === e.currentTarget) {
         closeDialog();
      }
   };

   return (
      <dialog
         className="w-full h-full fixed top-0 z-30 bg-[#444a] text-white flex justify-center items-center"
         onClick={(e) => handleCloseModalPay(e)}
      >
         {subscriptionSuccessMutation.isPending
            && <PayLoading />}

         {!subscriptionSuccessMutation.isPending
            && !createPlanMutation?.isError
            && !subscriptionSuccessMutation?.isError
            && !cancelSubscriptionMutation?.isError
            && <PayCard
               membershipId={membershipId}
               handleForm={handleForm}
               paypalRef={paypalRef}
               price={price}
            />
         }

         {subscriptionSuccessMutation.isSuccess
            && <PaySuccess />
         }

         {(subscriptionSuccessMutation.isError || createPlanMutation.isError || cancelSubscriptionMutation.isError)
            && <PayError />
         }
      </dialog>
   );

})
PayMembershipCard.displayName = "PayMembershipCard";

PayMembershipCard.propTypes = {
   membershipId: PropTypes.string,
   price: PropTypes.number,
   closeDialog: PropTypes.func,
};

export const PayCard = ({ price, handleForm, paypalRef }) => {
   return (
      <div className="w-[45rem] space-y-5 bg-[#181d23] text-center rounded-xl p-10">
         <section className='space-y-3'>
            <h5 className="md:text-2xl font-bold uppercase">
               Quiero contratar este plan
            </h5>
            <p className='text-balance'>
               Accedes a todas nuestras localidades luego de adquirir <br />
               un plan con nosotros. Para mayor información <a
                  className='text-yellow'
                  href="#">click aquí
               </a>
            </p>
         </section>
         <section
            className='w-[70%] mx-auto '
         >
            <PayForm handleForm={handleForm} />
         </section>
         <h3 className='text-xl font-bold mb-4'>
            Pagar: ${price}
         </h3>
         <section
            className='w-[70%] mx-auto'
            ref={paypalRef}
         >
         </section>
      </div>
   )
}

PayCard.propTypes = {
   membershipId: PropTypes.string,
   price: PropTypes.number,
   handleForm: PropTypes.func,
   paypalRef: PropTypes.object
}
