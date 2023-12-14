import { fetchJson } from '../utils'

const init = (apiUrl) => {
  const service = "duffel"

  const endpoints = {
    search : {
      async get (data) {
        const resp = await fetchJson(`${apiUrl}/${service}/search/`, { 
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            "Content-Type": "application/json"
          }
        })
        return resp
      }
    },
    offers : {
      async get (id) {
        const resp = await fetchJson(`${apiUrl}/${service}/offers/${id}`, { 
          headers: {
            "Content-Type": "application/json"
          }
        })
        return resp
      }
    },
    orders: {
      async get (data) {
        const resp = await fetchJson(`${apiUrl}/${service}/orders/`, { 
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            "Content-Type": "application/json"
          }
        })
        return resp
      }
    },
    payments: {
      async create (data) { // {amount:###, currency:"GBP" }
        const resp = await fetchJson(`${apiUrl}/${service}/payments/`, { 
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            "Content-Type": "application/json"
          }
        })
        return resp
      },
      async confirm (id) { // {amount:###, currency:"GBP" }
        const resp = await fetchJson(`${apiUrl}/${service}/payments/${id}`, { 
          method: "GET", 
          headers: {
            "Content-Type": "application/json"
          }
        })
        return resp
      },
      
    },


  }
  
  return endpoints

}

export default init