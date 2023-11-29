import { fetchJson } from '../utils'

const init = (apiUrl) => {
  const service = "duffel"

  const endpoints = {
    search : {
      async get (data) {
        const resp = await fetchJson(`${apiUrl}/${service}/search/`, { 
          method: "POST", body: JSON.stringify(data), 
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
    }

  }
  
  return endpoints

}

export default init