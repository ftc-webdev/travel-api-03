import Field from './Field'
import { useState, useEffect } from 'react'
// import { sampleSearchCountryCode } from '../data'
import models from '../models'
/*
{
  "iataCode": "JFK",
  "icaoCode": "KJFK",
  "name": "JOHN F KENNEDY INTL",
  "alpha2countryCode": "US",
  "latitude": 40.6398,
  "longitude": -73.7787
}
*/

const Airport = ({airport}) => {

  const [ country, setCountry ] = useState()
  
  useEffect(() => {
    // do this when the variable(s) in the array below change
    // sampleSearchCountryCode( airport.alpha2countryCode )
    models.countries.get(airport.alpha2countryCode)
    .then((data) => {
      setCountry(data)
    })

  }, [ airport ])

  return (
    <div className="container">
      <div className="airport">
        <h3>Airport Data </h3>
        <Field label="IATA Code:" data={airport.iataCode} />
        <Field label="ICAO Code:" data={airport.icaoCode} />
        <Field label="Name:" data={airport.name} />
        <Field label="Country:" data={airport.alpha2countryCode} />
        <Field label="Lat/Long:" data={airport.latitude + "/" + airport.longitude} />
        { country && <Field label="Country" data={country.name} /> }
      </div>
    </div>
  )
}

export default Airport