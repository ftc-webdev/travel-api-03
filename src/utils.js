let message
/*
  this is initialised to something (Notification) 
  that will allow messages (errors etc) to be displayed from this library
*/
export const init = (msghandler) => {
  message = msghandler
}
export const fetchJson = async (url, options) => {
  const resp = await fetch(`${url}`, options)
  // console.log("fetch resp", resp)
  if(resp.status === 200) {
    const data = await resp.json()
    return data 
  } else {
    const msg = `Fetch Error: ${resp.status} ${resp.statusText}`
    console.log("fetch error", resp, msg)
    message(msg)
    // throw new Error()
  }
}

export const getYearDiff = (date1, date2) => {
  return Math.abs(date2.getFullYear() - date1.getFullYear());
}

export const isLetter = (char) => /^[a-z]$/i.test(char)

export const isoDate = (d) => {
  if (!d) d = new Date()
  const str = d.toISOString()
  return str.substring(0, 10)
} 

export const isoTime = (datetime) => {
  const time = datetime.slice(-8)
  return time.slice(0, 5)
}

export const tmw = (d) => {
  if (!d) d = new Date()
  d.setDate(d.getDate() + 1)
  return isoDate(d)
}

// export {
//   init,
//   fetchJson,
//   isoDate,
//   tmw,
// }