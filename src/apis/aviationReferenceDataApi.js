import { fetchJson } from '../utils'

const service = "aviationReferenceDataApi"
const init = (apiUrl) => {

  const url = `${apiUrl}/${service}`
  
  const airlines = {
    async get (code) { 
      return await fetchJson(`${url}/airlines/${code}`)
    }
  }
  
  const airports = {
    async get (code) { 
      return await fetchJson(`${url}/airports/${code}`) 
    }
  }

  const endpoints = {
    airlines,
    airports
  }
  
  return endpoints  

}

export default init
