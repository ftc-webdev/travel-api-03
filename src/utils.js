const fetchJson = async (url) => {
  const resp = await fetch(`${url}`)
  const data = resp.json()
  return data 
}

export {
  fetchJson
}