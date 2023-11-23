
const Form = () => {
  return (
    <div>Form</div>
  )
}

const Select = ({value, values, label, code = "code", name = "name"}) => {

  return (
    <div className="form-control">
        { label && <label>{label}</label> }
        <select>
        {
          values.map((element) => (
            <option value={ element[code] } selected={element[code] === value}>
            { element[name] }  
            </option>
          ))
        }
        </select>
    </div>
  )

}

const Input = ({value, label, onEnter, ...options}) => {

  if(!options) options = {}

  const onKeyDown = (e) => {
    // console.log("onKeyDown", e)
    if(e.keyCode === 13 && onEnter ) onEnter(e)
  }

  const onChange = (e) => {
    // console.log("Form.Input.onChange", options.onChange)
    if(options.onChange) options.onChange(e)
  }
  
  return (
    <div className="form-control">
        { label && <label>{label}</label> }
        <input 
          type="text" 
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
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
  Select
}

export default Form