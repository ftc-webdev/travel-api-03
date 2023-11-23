
const getIPFromAmazon = async () => {
  const res = await fetch("https://checkip.amazonaws.com/")
  const data = await res.text()
  console.log("data.getIPFromAmazon", data)
  return data
}

const geoLocateIP = async () => {
  const ip = await getIPFromAmazon()
  const apiKey = "3E17E9E064E03559313967D3D809147C"
  const url = "https://api.ip2location.io/"
  const res = await fetch(`${url}?key=${apiKey}&ip=${ip}`)
  const data = await res.json()
  console.log("data.geoLocateIp", data)
  // https://api.ip2location.io/?key=3E17E9E064E03559313967D3D809147C&ip=80.233.45.22
  return data
}


const avaiationReferenceDataSearch = async (code, endpoint) => {

  const url = `https://aviation-reference-data.p.rapidapi.com/${endpoint}/${code}`;
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43b67899b8msh628d113745d1ea3p1f3862jsn458a8944bd33',
      'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log('aviationRefeneceDataSearch', endpoint, code, result);
    return result
  } catch (error) {
    console.error(error);
  }

}

const sampleSearchCountryCode = async (code) => {
  return await avaiationReferenceDataSearch(code, 'countries')
}

const sampleSearchAirlineCode = async (code) => {
  return await avaiationReferenceDataSearch(code, 'airline')
}


const sampleSearchAirportCode = async (code) => {
  return await avaiationReferenceDataSearch(code, 'airports')
}

const sampleCountryGetAll = async () => {
  const profile = "fit"
  const keys = {
    "eamole" : "43b67899b8msh628d113745d1ea3p1f3862jsn458a8944bd33",
    "fit" : "32dfcf8213msh7042b87b51b1af2p1ca11ejsn20097731e4ab"
  }
  const url = 'https://aviation-reference-data.p.rapidapi.com/countries';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': keys[profile],
      'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export {
  sampleSearchCountryCode,
  sampleSearchAirlineCode,
  sampleSearchAirportCode,
  sampleCountryGetAll,
  geoLocateIP,
}