import countriesJson from './countries.json'

const Countries = (json)  => {
  	const data = json
    const index = {}
    data.forEach(country => {
      // strangely, this data has two independent keys - the alpha2 and the alpha3
      index[country.alpha2Code] = country
      index[country.alpha3Code] = country
    })

    console.log("index", index)

    const get = async (code) => {
      if(index[code]) return index[code]
      // throw new Error("Countries.index.js: Country code not found " + code)
      console.error("Countries.index.js: Country code not found " + code)
    }

    return {
      data, 
      index, 
      get
    }

}

const countries = Countries(countriesJson)

// console.log("GB", countries.get("GB"))
// console.log("GBR", countries.get("GBR"))
// console.log("IE", countries.get("IE"))
// console.log("IRL", countries.get("IRL"))
// console.log("EI", countries.get("EI"))

export default countries