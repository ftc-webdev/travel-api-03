import models from '../models'
const { countries } = models

/*
  an input control to select a country from a list

*/

const Country = ({code, name}) => {
  return (
    <option value={code}>{name}</option>
  )

}

const Countries = ({label}) => {

  return (
    <div className="countries">
      <label >{label}</label>
      <input type="text" list="countries" />
      <datalist id="countries">
      {
        countries.data.map(country => <Country key={country.alpha2Code} code={country.alpha2Code} name={country.name} />)
      }
      </datalist>

    </div>
  )
}

export default Countries