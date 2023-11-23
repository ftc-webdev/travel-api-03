import aviationReferenceDataApi from './aviationReferenceDataApi'
import amazonaws from './amazonaws'
import ip2location from './ip2location'

const port = "3001" // need to get this from the server
const url = `http://localhost:${port}/api/v1`
/* 
  each api needs access to the url
  so we will change what comes out of each api from being an object to a binding (init) function
  the function when called will return an object which has access to this value

  we have modified the structure of the apis here
  we now return a function, which when called, will bind all our methods to a given
  route on out backend server - eg express-api-02

*/

/*
 note how we inport the default export function as a function of the same name as the service
 and we use this function to create an object bound to the url
*/
const apis = {
  aviationReferenceDataApi: aviationReferenceDataApi(url),
  amazonaws: amazonaws(url),
  ip2location: ip2location(url),
}

export default apis