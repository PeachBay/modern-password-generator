import React from "react"

const Checkbox = ({id, label, handleChange, isChecked, isDisabled}) => {

  return (
    <div key={id}>
      <label htmlFor={id}>
        <input type="checkbox" id={id} name={id} onChange={handleChange} defaultChecked={isChecked} disabled={isDisabled} className="custom-checkbox"/>
        <span className="ml-2">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox