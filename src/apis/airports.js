import { fetchJson } from '../utils'

const init = (apiUrl) => {
  const service = "airports"

  const endpoints = {
    search : {
      async get (text) {
        const data = await fetchJson(`${apiUrl}/${service}/search/${text}`)
        return data
      }
    }
  }
  
  return endpoints

}

export default init