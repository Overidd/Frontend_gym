import { useQuery } from "@tanstack/react-query"
import { getAllServices, getAllClases } from "@/services/fetchApi"

export const useGetFilterLocal = () => {

   const filterServicesQuery = useQuery({
      queryKey: ["filterServices"],
      queryFn: () => getAllServices(),
      staleTime: 1000 * 60 * 60 * 24,
      placeholderData: dataTempServices,
      retry: false,
      enabled: true,
   })

   const filterClasesQuery = useQuery({
      queryKey: ["filterClases"],
      queryFn: () => getAllClases(),
      staleTime: 1000 * 60 * 60 * 24,
      placeholderData: dataTempClases,
      retry: false,
      enabled: true,
   })

   return {
      filterServicesQuery,
      filterClasesQuery,
   }
}

const dataTempServices = [
   {
      "id": 5,
      "name": "Estacionamiento",
   },
   {
      "id": 6,
      "name": "Personal Trainer",
   },
   {
      "id": 4,
      "name": "wifi",
   }
]

const dataTempClases = [
   {
      "id": 2,
      "name": "Yoga",
   },
   {
      "id": 3,
      "name": "Baile",
   },
   {
      "id": 4,
      "name": "Zumba",
   },
   {
      "id": 5,
      "name": "Pilates",
   },
   {
      "id": 6,
      "name": "Cardio",
   },
   {
      "id": 7,
      "name": "Peso",
   }
]