
/*

  we have modified the structure of the apis here
  we now return a function, which when called, will bind all our methods to a given
  route on out backend server - eg express-api-02

*/
/*
  this code will no longer work. We need to use the browser geolocation api
  this code will return the location of the server!!
*/
const init = (apiUrl) => {
  const service = "amazonaws"

  const endpoints = {
    ip : {
      async get () {
        const res = await fetch(`${apiUrl}/${service}/ip`)
        const data = await res.text()
        // console.log("data.getIPFromAmazon", data)
        return data
      }
    }
  }
  
  return endpoints

}

export default init