import { useState, useEffect } from 'react'
import Select from 'react-select'
import { isLetter } from '../../utils'
import apis from '../../apis'
// console.log( { apis })
const { airports } = apis // not sure why I cannot import this as a named import!!

/*
  an input control to select a country from a list

*/

const Airports = ({label, value, onSelect}) => {
  
  const [ airportData, setAirportData ] = useState()  // declares a state variable, and a mutator
  const [ searchValue, setSearchValue ] = useState(value)

  // useEffect(() => {
  //   if(value) {
  //   }
  // }, [value])

  // option: { value, label } = {iata_code, airport_name }
  const onChange = (option) => {
    console.log("selected option", option)
    setSearchValue(option)
    console.log("searchValue", searchValue)
    onSelect(option?.value) // option && option.value
  }

  const onKeyDown = async (e) => {
    // console.log("keydowncurrent input", e.target.value, e.key)
    let text = e.target.value
    
    if(isLetter(e.key)) text += e.key

    if(e.keyCode === 13 || text.length >= 3) {
      console.log("enter")
      let data = await airports.search.get(text)

      data = data.map(airport => {
        return { value: airport.iata_code, label: airport.name }
      })
      // console.log("airport data", data)
      setAirportData(data)  // calling state mutator -> triggers a UI update
      
      if(data.length === 1) {
        console.log("assign value", data[0])
        // e.target.value = data[0].name
        setSearchValue(data[0])  // need an object of { label, value }
        onSelect && onSelect(data[0].value)
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
        value={searchValue}
    />


    </div>
  )
}

export default Airports