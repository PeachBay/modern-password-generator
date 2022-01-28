
import { customAlphabet } from 'nanoid';
  
const generatePassword = (length, options) => {
  const defaultPass = options.reduce(
    (accumulator, currentOption) => {
      return accumulator + currentOption.dictionary
    }, 
    ""
  )

  const dictionary = options.reduce(
    (accumulator, currentOption) => {
      if (currentOption.value) {
        return accumulator + currentOption.dictionary
      }

      return accumulator
    }, 
    ""
  )

  if (dictionary) {
    return customAlphabet(dictionary, length)
  }

  return customAlphabet(defaultPass, length)
}

const utils = {
  generatePassword: generatePassword
}

export default utils
