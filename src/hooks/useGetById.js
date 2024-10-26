import { useQuery } from "@tanstack/react-query"
import { getByIdLocal } from "@/services/fetchApi"

export const useGetById = (id) => {

   const localQuery = useQuery({
      queryKey: ["local", id],
      queryFn: () => getByIdLocal(id),
      retry: false,
      enabled: true,
      staleTime: 1000 * 60 * 60 * 10
   })
   return {
      ...localQuery
   }
}
