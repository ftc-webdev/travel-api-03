import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookingContext from './Context'
// import { NotificationContext } from '../../context/Notification'

import { Input, RadioButton, Select } from '../Form'
import { getYearDiff } from '../../utils'

const Passenger = ({ passenger, onChange }) => {
  // console.log("Passenger(): passenger", passenger)
  const defaultFormFields = {
    id: "",
    age: "",
    title: "mr", // "mr", "ms", "mrs", "miss", or "dr"
    family_name: "",
    given_name: "",
    // fare_type: "",
    // born_on: "",
    email: "",
    phone_number: "",
    gender: "m", // m/f
    // type: "", // adult, child, infant_without_seat
  } 
  const [ formFields, setFormFields ] = useState(defaultFormFields)
  const [ born_on, setBornOn ] = useState(defaultFormFields)
  const [ type, setType ] = useState(defaultFormFields)
  
  const bookingContext = useContext(BookingContext)

  const {age, family_name, given_name, email, phone_number, gender, title} = formFields
  
  useEffect(() => {
    // console.log("useEffect(): passenger", passenger)
    setFormFields({...formFields, ...passenger})  // init the formFields
  }, [ passenger ]) // formFields : causes a loop, cos we update it inside useEffect

  // const navigate = useNavigate()

  const onPassengerSave = () => {
    const passenger = {
      ...formFields, // why no title coming through
      // these fields are handled by state!!
      born_on,
      type,
    }
    onChange(passenger) // send it to parent
  }

  const handleChange =(val, e) => {
    console.log("handleChange:", val, e)
    const { name, value } = e.target
    console.log("handleChange:", name, value)
    setFormFields({...formFields, [name]: value})
  }
  const onValueChange = (e) => {
    const { name, value } = e.target
    console.log("onValueChange:", name, value, e.target)
    setFormFields({...formFields, [name]: value})

  }
  
  const onTypeChange = (val, e) => {
    setType(val)
  }
  /* 
    need to handle born_on differently
  */
  const onBornOnChange = (val, e) => {
    console.log("born on", val)
    setBornOn(val)
    // handleChange(val, e)
    
    // calc age
    const born = new Date(val)
    const { departureDate } = bookingContext.search
    const depart = new Date( departureDate )
    const age = getYearDiff(born, depart)
    
    let _type = "adult" 
    if(age<=18) _type = "child"
    if(age<=3) _type = "infant_without_seat"
    // console.log("update age/type", { age, _type })
    setFormFields({...formFields, "age": age, "type": _type })
    setType(_type)
  }
  
  // const types = [
  //   {label: "Adult", value: "adult"},
  //   {label: "Child", value: "child"},
  //   {label: "Infant", value: "infant_without_seat"},
  // ]
  
  // "mr", "ms", "mrs", "miss", or "dr"
  const titles = [
    {label: "Mr.", value: "mr"},
    {label: "Mrs.", value: "mrs"},
    {label: "Ms.", value: "ms"},
    {label: "Miss", value: "miss"},
    {label: "Dr.", value: "dr"},
  ]
  return (
    <div className="passenger">
      <span className="heading">Passenger Information</span>
      {/* <Input name="id" value={id} readonly={true} disabled={true} /> */}
      <Select label="Title" name="title" value={title}
        values={titles}
        code="value"
        display="label"
        onChange={onValueChange} 
       />
      <Input label="Family Name" name="family_name" value={family_name} placeholder="Enter your family name (surname)" onChange={handleChange} />
      <Input label="Given Name" name="given_name" value={given_name} placeholder="Enter your given name (first name)" onChange={handleChange} />
      <div>
        <label htmlFor="">Gender :</label>
        <RadioButton label="Male" name="gender" value="m" onChange={onValueChange} reverse={true} checked={gender === "m"} />
        <RadioButton label="Female" name="gender" value="f" onChange={onValueChange} reverse={true} checked={gender === "f"} />
      </div>
      <Input label="Date of Birth" name="born_on" type="date" value={born_on} placeholder="Enter your date of birth" onChange={onBornOnChange} />
      <Input label="Age" name="age" type="number" value={age} placeholder="Enter your age at the time of flight" onChange={handleChange} />
      <div>
        <label htmlFor="">Passenger Type:</label>
        <RadioButton label="Adult" name="type" value={"adult"} onChange={onTypeChange} reverse={true} checked={type === "adult"} />
        <RadioButton label="Child" name="type" value={"child"} onChange={onTypeChange} reverse={true} checked={type === "child"} />
        <RadioButton label="Infant" name="type" value={"infant_without_seat"} onChange={onTypeChange} reverse={true} checked={type === "infant_without_seat"} />
      </div>
      <Input label="Email" name="email" type="email" value={email} placeholder="Enter your email" onChange={handleChange} />
      <Input label="Phone" name="phone_number" type="phone" value={phone_number} placeholder="Enter your phone number" onChange={handleChange} />
      {/* <RadioButtons label="Passenger Type : " name="type" value={type} values={types} onChange={onTypeChange} reverse={true} /> */}
      <button className='btn' onClick={onPassengerSave}>Save</button>
    </div>  
  )
}



const Passengers = () => {

  const bookingContext = useContext(BookingContext)
  
  const [passengers, setPassengers] = useState(bookingContext.passengers)
  const [, setCurrPassenger] = useState()

  let currIndex = 0 // offset of currPassenger

  // const { message } = useContext(NotificationContext)
  const navigate = useNavigate()
  let counter = 1
  useEffect(() => {
    setPassengers(bookingContext.passengers)
  }, [bookingContext.passengers])

  const gotoBooking = () => {
    console.log("context.pax", bookingContext.passengers)
    navigate("/booking")
  }
  
  const onPassengerSave = (passenger) => {
    console.log("update pass", passenger, passengers)
    const newPax = passengers.map(pax => pax.id === passenger.id ? passenger : pax) 
    setPassengers(newPax)
    bookingContext.setPassengers(newPax)
    console.log("newPax", newPax, bookingContext) // !!! this is not updating passengers
    if(passengers.length === 1) {
      gotoBooking()
    } else {
      // collapse the header and move to next passenger
      currIndex++
      if(currIndex===passengers.length) {
        gotoBooking()
      } else {
        setCurrPassenger(passengers[currIndex])
      }
    }
  }

  return (
    <div className="passengers">
      <button className="btn" onClick={() => navigate(-1)}>{"<< Offers"}</button>
      <span className="heading">Passengers</span>
      <button className="btn" onClick={gotoBooking}>{"Book Flight >>"}</button>

      {
        passengers.length > 0 && passengers.map(passenger => <Passenger 
          key={counter++} 
          passenger={passenger}
          onChange={onPassengerSave} 
        />)
      }
    </div>
  )
}

export default Passengers