/*
  this function creates a standard Restful endpoint targeting the server
  it supplies
  get(id) -> GET /path/:id
  getAll(queryObject) -> GET /path/?query
  create(obj) -> POST /path       body={obj}
  update(obj) -> PUT /path/:id    body={obj}
  del(obj)    -> DELETE /path/:id   Note: delete is a reserved word in JS so we use del

  methods could be an array of strings for each method to create["get", "getAll", "del", "create", "update"], or "all"
  to simplify things, we will use "cruds.toLowerCase()" for create, read, update, delete, search  
*/
/*
  might need to provide a specific exported method to register the api access token and the user id when the user 
  logs in, and store them in this module 
*/

const user = {
  id: null,
  apiToken: null,
}

const reqOptions = (options, body) => {
  body = JSON.stringify(body)
  return {
    method: "GET",
    body: body || "",
    // need to add a client id if logged in - where from - can't access context
    // need to add an access token for booking operations - where from?
    headers: {
      "x-user-api-token": user.apiToken || "",
      "x-user-id": user.id || "" ,
      "Content-Type": "application/json"
    },
    ...options    // override/add option settings
  }
}

const init = (baseUrl, apis) => {

  /*
    after the user logs in, call this function with the data
  */
  const registerUserId = (userId) => {
    user.userId = userId
  }
  const registerUserApiToken = (userApiToken) => {
    user.apiToken = userApiToken
  }
  
  /*
    creates a set of restful endpoints
    cruds = "cruds"   Create Read Update Delete Search
  */
  const rest = (name, path, cruds) => {
    const url = baseUrl + path
   
    const get = async (id) => {
      const resp = await fetch(url + `/${id}`, reqOptions())
      const data = await resp.json()
      return data
    }
    // this is the search function
    const getAll = async (query) => {
      // need to decide how to encode the query object...take each property (for..in) and create key=value with & between pairs
      // url encode the string and append it to the url
      let search = "?"

      const resp = await fetch(url + search, reqOptions())
      const data = await resp.json()
      return data
    }

    const create = async (obj) => {
      const resp = await fetch(url, reqOptions({method: "POST"}, obj))
      const data = await resp.json()
      return data // this should be the newly create object, complete with id
    }
    const update = async (obj) => {
      const resp = await fetch(url + `/${obj.id}`, reqOptions({method: "PUT"}, obj))
      const data = await resp.json()
      return data // this should be the newly create object, complete with id
    }
    // note: delete is a reserved word in JS
    const del = async (obj) => {
      let id;
      if("string,number".includes(typeof(obj))) id = obj
      else id = obj.id
      
      const resp = await fetch(url + `/${id}`, reqOptions({method: "DELETE"}))
      const data = await resp.json()
      return data // this should be the newly create object, complete with id
    }
  
    const endpoint = {
      url // sed tye endpoit object with the url - FYI
    }
    if(cruds.toLowerCase().includes("c")) endpoint.create = create
    if(cruds.toLowerCase().includes("r")) endpoint.get = get
    if(cruds.toLowerCase().includes("u")) endpoint.update = update
    if(cruds.toLowerCase().includes("d")) endpoint.del = del
    if(cruds.toLowerCase().includes("s")) endpoint.getAll = getAll
    
    // attach it to the endpoints container
    apis[name] = endpoint

    return endpoint
  }
  return {
    rest,
    registerUserId,
    registerUserApiToken
  }
}

export default init 
// call init and it will return three functions - one to generate a bound set of rest endpoints
// another will register the userApiToken and the last will register the userId
// the user id is required to associate all these requests with a specific user
// that is if the server is going to handle ALL users requests
// the user id is passed through to duffel as well in header x-client-correlation-id
// the userApiToken is required to go beyond search ie must be registered  
