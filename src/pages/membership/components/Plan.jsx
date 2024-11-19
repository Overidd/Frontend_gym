import { useState } from "react";
import { CardPlan } from "./CardPlan";
import { CardSkeleton } from "../../locationDetail/components";
import { useGetAllmembership } from "../../../hooks/useGetAllmembership";
import { PayMembershipCard } from "../../../components/payMembership/payCard";

export const Plan = () => {
   const { getMembershipQuery } = useGetAllmembership();
   const [selectedPlan, setSelectedPlan] = useState(null);

   const handleOpenModalPay = (plan) => {
      setSelectedPlan(plan);
   };

   const handleCloseModalPay = () => {
      setSelectedPlan(null);
   };

   return (
      <div className="grid lg:grid-cols-2 place-self-center gap-7">
         {getMembershipQuery.isLoading &&
            Array.from({ length: 4 }).map((_, index) => (
               <CardSkeleton
                  className={'w-[20rem] h-[25rem]  md:w-[25rem] md:h-[25rem]'}
                  key={index}
               />
            ))
         }

         {getMembershipQuery.data?.length === 0 && (
            <div className="text-center col-span-2 text-2xl">
               No hay planes disponibles en este momento
            </div>
         )}

         {getMembershipQuery.data?.length > 0 &&
            getMembershipQuery.data.map((plan, index) => (
               <CardPlan
                  key={plan.id}
                  data={plan}
                  isBorder={index === 1}
                  onOpenModalPay={handleOpenModalPay}
               />
            ))
         }
         {selectedPlan && (
            <PayMembershipCard
               price={parseInt(selectedPlan.price)}
               membershipId={selectedPlan.id}
               closeDialog={handleCloseModalPay}
            />
         )}
      </div>
   );
};

