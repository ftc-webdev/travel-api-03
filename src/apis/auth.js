// this needs to be a more communal object

const reqOptions = (options, body) => {
  body = JSON.stringify(body)
  console.log("body", body)
  return {
    method: "GET",
    body: body || "",
    headers: {
      "Content-Type": "application/json"
    },
    ...options    // override/add option settings
  }
}


/*
  login and logout handlers
*/
const init = (apiUrl, fetchJson) => {
  const service = "auth"

  const endpoints = {
    async login (userCreds) {
      const data = await fetchJson(`${apiUrl}/${service}/login`, reqOptions({method: "POST"}, userCreds))
      return data
    },
    async register (userCreds) {
      const data = await fetchJson(`${apiUrl}/${service}/register`, reqOptions({method: "POST"}, userCreds))
      return data
    }, 
    // do I need this
    async logout (id) {
      const data = await fetchJson(`${apiUrl}/${service}/logout/${id}`, reqOptions())
      return data
    },
 
  }
  // console.log("auth endpoints", endpoints)
  return endpoints
}

export default init