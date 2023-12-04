import { useState, useEffect } from 'react'
import Select from 'react-select'

import apis from '../apis'
// console.log( { apis })
const { airports } = apis // not sure why I cannot import this as a named import!!

/*
  an input control to select a country from a list

*/

const Airports = ({label, value, onSelect}) => {
  
  const [ airportData, setAirportData ] = useState()

  useEffect(() => {
    if(value) {
    }
  }, [value])

  const isLetter = (char) => /^[a-z]$/i.test(char)

  const onChange = (option) => {
    console.log("selected option", option)
    onSelect(option?.value)

  }

  const onKeyDown = async (e) => {
    // console.log("current input", e.target.value, e.key)
    let text = e.target.value
    
    if(isLetter(e.key)) text += e.key

    if(e.keyCode === 13 || text.length >= 3) {
      let data = await airports.search.get(text)

      data = data.map(airport => {
        return { value: airport.iata_code, label: airport.name }
      })
      // console.log("airport data", data)
      setAirportData(data)
      
      if(data.length === 1) {
        e.target.value = data[0].name
        onSelect && onSelect(data[0].iata_code)
      }
    }
  }


  return (
    <div className="airports form-control column">
      <label >{label}</label>

      <Select 
        placeholder="Enter an airport code or city"
        options={airportData} 
        onKeyDown={onKeyDown}
        onChange={onChange}
        isClearable={true}
    />


    </div>
  )
}

export default Airports