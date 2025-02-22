export const getAllAdress = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/local/all/location`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })

   const data = await response.json()
   if (!response.ok) {
      throw new Error(data.message || 'Error inesperado!')
   }

   const locations = data.data
   let arrayData = []

   locations.forEach((location) => {
      let address = ''
      for (const [key, value] of Object.entries(location)) {
         const isInclude = arrayData.includes(value)

         if (!isInclude && typeof value != 'number') {
            if (key == 'address') {
               address = value
            }
            if (key == 'zip_code') {
               arrayData.push(value + ' ' + address)

            } else {
               arrayData.push(value)
            }
         }
      }
   })
   return arrayData
}

export const getAllServices = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/service/all`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const data = await response.json()

   if (!response.ok) {
      throw new Error(data.message || 'Error inesperado!')
   }
   const services = data.data
   return services
}

export const getAllClases = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/clase/all`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const data = await response.json()

   if (!response.ok) {
      throw new Error(data.message || 'Error inesperado!')
   }
   const clases = data.data
   return clases
}

export const getAllLocations = async (params) => {
   // const params1 = new URLSearchParams(window.location.search);
   // const queryString = params1.toString();

   const response = await fetch(`${import.meta.env.VITE_API_URL}/local/all/?${params}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })

   const data = await response.json()
   if (!response.ok) {
      throw new Error(data.message || 'Error inesperado!')
   }
   const locales = data.data
   return locales
}

// Obtener un local por id
export const getByIdLocal = async (id) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/local/get/${id}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const data = await response.json()
   if (response.status === 404) {
      throw new Error(`404, ${data?.message}`)
   } else if (response.status === 500 || response.status === 400) {
      throw new Error(`500, ${data?.messages[0] ?? 'Error inesperado'}`)
   }

   const local = data.data
   return local
}

export const createPlan = async (membership_id) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/subscription/create/plan`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         membership_id: membership_id,
      }),
   });

   const dataJson = await response.json();

   if (response.status !== 201) {
      throw new Error(dataJson.message || dataJson.messages);
   }

   return dataJson.planId
}

export const subscriptionSuccess = async (subscriptionId, { first_name, last_name, email }) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/subscription/success/${subscriptionId}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         email: email,
         first_name: first_name,
         last_name: last_name,
      }),
   })

   const dataJson = await response.json();
   if (response.status !== 201) {
      throw new Error(dataJson.message || dataJson.messages);
   }

   return dataJson
}

export const cancelSubscription = async (planId) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/subscription/cancel/plan/${planId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   })
   const dataJson = await response.json();
   return dataJson
}

export const getAllMemberships = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/membership/all`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const dataJson = await response.json()
   if (!response.ok) {
      throw new Error(dataJson.message || 'Error inesperado!')
   }
   const memberships = dataJson.data
   return memberships
}