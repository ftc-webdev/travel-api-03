const fetchJson = async (url, options) => {
  const resp = await fetch(`${url}`, options)
  const data = await resp.json()
  return data 
}

export {
  fetchJson
}