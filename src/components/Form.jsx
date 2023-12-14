import { useState } from 'react'
const Form = () => {
  return (
    <div>Form</div>
  )
}
let radioCounter = 1
const RadioButton = ({ label, value, name, onChange, reverse = false, ...options }) => {
  return (
    <>
      { !reverse && <label htmlFor={"radio-" + radioCounter}>{label}</label> }
      <input 
        id={"radio-" + radioCounter++} 
        type="radio" 
        value={value} 
        name={name}
        onChange={onChange}
        {...options}
      />
      { reverse && <label htmlFor={"radio-" + radioCounter}>{label}</label> }
    </>

  )
}
// this takes an array of { label, value } and renders a RadioButtonGroup 
const RadioButtons = ({ label, value, name, onChange, values, reverse = false, ...options }) => {
  const onInputChange = (e) => {
    onChange(e.target.value, e)
  }

  return (
    <>
      {/* <div className="form-control column"> */}
        { label && <label htmlFor="">{label}</label> }  
        { values.map(({label, _value}) => <RadioButton
            name={name}
            label={label} 
            value={_value}
            checked={_value === value}
            onChange={onInputChange}
            reverse={reverse}
            {...options}  
          />
        )}
      {/* </div> */}
    </>
  )
}

const Button = ({ onClick, label }) => {
  return (
    <button className="btn" onClick={onClick}>
        {label}
    </button>
  )
}
let counter = 1
const Select = ({value, name, values, label, onChange, code = "value", display = "label"}) => {

  return (
    <div className="form-control column">
        { label && <label>{label}</label> }
        <select
          name={name}
          onChange={onChange}
          value={value}
        >
        {
          values.map((element) => (
            <option key={counter++} value={ element[code] } 
              // selected={element[code] === value}
            >
            { element[display] }  
            </option>
          ))
        }
        </select>
    </div>
  )

}


const Input = ({value, label, onEnter, onChange, type, ...options}) => {

  if(!options) options = {}

  const onInputChange = (e) => {
    // console.log("Form.Input.onChange", e)
    onChange(e.target.value, e)
  }
  
  return (
    <div className="form-control column">
        { label && <label>{label}</label> }
        <input 
          type={type ? type : "text"} 
          value={value}
          onChange={onInputChange}
          disabled={options.disabled}
          {...options} 
        />
      </div>
  )
}

Input.defaultOptions = {
  options: {}
}

export {
  Input,
  Select,
  Button,
  RadioButton,
  RadioButtons,
}

export default Form