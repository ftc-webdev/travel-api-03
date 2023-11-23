import amazonaws from './amazonaws'
import { fetchJson } from '../utils'

const init = (apiUrl) => {
  const service = "ip2location"
  return {
    location: {
      async get () {
        const ip = await amazonaws(apiUrl).ip.get()
        const data = await fetchJson(`${apiUrl}/${service}/location/${ip}`)
        console.log("data.geoLocateIp", data)
        return data
  
      }
    }
  }
}

export default init