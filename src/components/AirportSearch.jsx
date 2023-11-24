import { useState } from 'react'
import apis from '../apis'
// console.log( { apis })
const { airports } = apis // not sure why I cannot import this as a named import!!

/*
  an input control to select a country from a list

*/

const Airport = ({code, name}) => {
  return (
    <option value={code}>{name}</option>
  )

}

const Airports = ({label, onSelect}) => {
  
  const [ airportData, setAirportData ] = useState()
  
  const onEnter = async (e) => {
    if(e.keyCode === 13) {
      const text = e.target.value
      const data = await airports.search.get(text)
      setAirportData(data)
      revealDataList(e)
      if(data.length === 1) {
        e.target.value = data[0].name
        onSelect && onSelect(e.target.value)
      }
    }
  }
// another attempt at hack to make datalist appear
const revealDataList = (e) => {

  const keyboardEvent = document.createEvent("KeyboardEvent");
  const initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent"

  keyboardEvent[initMethod](
    "keyup", // event type : keydown, keyup, keypress
    true, // bubbles
    true, // cancelable
    window, // viewArg: should be window
    false, // ctrlKeyArg
    false, // altKeyArg
    false, // shiftKeyArg
    false, // metaKeyArg
    40, // keyCodeArg : unsigned long the virtual key code, else 0
    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
  )
  e.target.focus();
  e.target.dispatchEvent(keyboardEvent);
  
}


  return (
    <div className="airports form-control">
      <label >{label}</label>
      <input 
        type="text" 
        list="airports" 
        placeholder="Enter an airport or city"
        onKeyDown={onEnter}
      />
      <datalist id="airports">
      {
        airportData && airportData.map(airport => <Airport key={airport.iataCode} code={airport.iataCode} name={airport.name} />)
      }
      </datalist>

    </div>
  )
}

export default Airports