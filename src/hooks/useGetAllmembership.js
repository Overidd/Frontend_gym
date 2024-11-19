import { useQuery } from "@tanstack/react-query"
import { getAllMemberships } from "../services/fetchApi"


export const useGetAllmembership = () => {
   const getMembershipQuery = useQuery({
      queryKey: ["membership"],
      queryFn: () => getAllMemberships(),
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
      enabled: true,
   })

   return {
      getMembershipQuery
   }
}
