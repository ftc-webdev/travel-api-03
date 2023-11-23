
import apis from '../apis'

const Airlines = () => {
  
  const get = async (code) => {
    return await apis.aviationReferenceDataApi.airlines.get(code)
  }

  return {
    get
  }
}

const airlines = Airlines()

export default airlines