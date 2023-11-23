import apis from '../apis'

const Airports = () => {
  return {
    async get (code) {
      return await apis.aviationReferenceDataApi.airports.get(code)
    }
  }
}

const airports = Airports()

export default airports
