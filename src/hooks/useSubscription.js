import { useMutation } from "@tanstack/react-query";
import { cancelSubscription, createPlan, subscriptionSuccess } from "../services/fetchApi";

export const useSubscription = () => {
  
   const createPlanMutation = useMutation({
      mutationFn: (membershipId) => createPlan(membershipId),
      onError: (error) => {
         console.error('Error al crear el plan:', error);
      },
   });

   const subscriptionSuccessMutation = useMutation({
      mutationFn: ({ subscriptionID, userData }) =>
         subscriptionSuccess(subscriptionID, userData),
      onSuccess: () => {
         console.log('Suscripción completada con éxito');
      },
      onError: (error) => {
         console.error('Error en la suscripción:', error);
      },
   });

   const cancelSubscriptionMutation = useMutation({
      mutationFn: (planId) => cancelSubscription(planId),
      onSuccess: () => {
         console.log('Suscripción cancelada');
      },
      onError: (error) => {
         console.error('Error en la cancelación de la suscripción:', error);
      },
   });

   return {
      createPlanMutation,
      subscriptionSuccessMutation,
      cancelSubscriptionMutation
   }
}
