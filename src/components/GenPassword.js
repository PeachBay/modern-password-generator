import React from "react";
import Checkbox from './Checkbox'
import passwordUtils from '../utils/password'

const GenPassword = ({setNewPassword, setCheckOptions, checkOptions, setNewLength, newLength}) => {
  const genPassword = (options) => {
    setNewPassword(passwordUtils.generatePassword(newLength, options))
  }

  const handleLength = (event) => {
    setNewLength(~~event.target.value)
    genPassword(checkOptions)
  }

  const handleCheck = (checkbox) => {
    const newCheckOptions = checkOptions.map(currentCheckbox => {
      if (currentCheckbox.id === checkbox.id) {
        currentCheckbox.value = !checkbox.value
      }

      currentCheckbox.isDisabled = false

      return currentCheckbox
    })

    const checkedOptions = newCheckOptions.filter(currentCheckOption => {
      return currentCheckOption.value
    })

    if (checkedOptions.length === 1) {
      const onlyCheckedOption = checkedOptions[0]
      const updatedCheckOptions = newCheckOptions.map(currentCheckbox => {
        if (currentCheckbox.id === onlyCheckedOption.id) {
          currentCheckbox.isDisabled = true
        }
    
        return currentCheckbox
      })

      setCheckOptions(updatedCheckOptions)
      genPassword(updatedCheckOptions)
    } else {
      setCheckOptions(newCheckOptions)
      genPassword(newCheckOptions)
    }
  }

  return (
    <>
      <div>
        <p>Choose length: <span className="length-chara">{newLength}</span> characters</p>
        <input type="range" min="8" max="36" defaultValue={newLength} className="custom-range" onChange={handleLength}></input>
      </div>

      {checkOptions.map(checkbox =>
        <Checkbox key={checkbox.id} id={checkbox.id} label={checkbox.label} handleChange={() => handleCheck(checkbox)} isChecked={true} isDisabled={checkbox.isDisabled}/>
      )}
    </>
  )
}

export default GenPassword