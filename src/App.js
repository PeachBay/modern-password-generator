import React, { useState } from 'react'
import GenPassword from './components/GenPassword'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import passwordUtils from './utils/password'

function App() {
  const [checkOptions, setCheckOptions] = useState([
  {
    id: 'letters',
    label: 'Letters (e.g. AbCd)',
    value: true,
    dictionary: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    isDisabled: false
  },
  {
    id: 'digits',
    label: 'Digits (e.g. 1234)',
    value: true,
    dictionary: `0123456789`,
    isDisabled: false
  },
  {
    id: 'symbols',
    label: 'Symbols (e.g. @#$%)',
    value: true,
    dictionary: `!"#$%&'()*+,-./:;<=>?@[]^_{|}~\``,
    isDisabled: false
  }])
  const [newLength, setNewLength] = useState(12)
  const [newPassword, setNewPassword] = useState(passwordUtils.generatePassword(newLength, checkOptions))

  const refreshPassword = (event) => {
    event.preventDefault()
    setNewPassword(passwordUtils.generatePassword(newLength, checkOptions))
  }

  return (
    <div className='App bg-black text-white'>

      <div className='container mx-auto px-4'>

        <nav className='py-4'>
          <a href="/" className="gradient-mono text-xl">Modern Password Generator</a>
        </nav>

        <header className='max-w-3xl mx-auto text-center my-5'>
          <h1 className='text-3xl md:text-6xl font-medium tracking-tighter mb-4'>
            Generate <span className='gradient-mono'>secure</span>, unique random password
          </h1>
        </header>

        <section className='max-w-3xl card mx-auto my-10'>
          <div className='flex justify-between items-center font-mono text-xl focus:outline-none py-1 px-2 break-all border-b-2 border-white'>
            <span>{newPassword}</span>
            <span className='cursor-pointer' onClick={refreshPassword}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-custom-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </span>
          </div>

          <div className="relative mt-10 w-52 mx-auto group">
            <div className="absolute -inset-0.5 rounded blur opacity-75 group-hover:opacity-100 bg-gradient-to-r from-custom-aqua to-custom-yellow transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <CopyToClipboard text={newPassword}>
              <button className='relative font-mono py-3 px-5 bg-custom-black group-hover:bg-black rounded w-full text-gray-400 group-hover:text-white inline-flex items-center justify-center'>
                <span>Copy password </span>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </CopyToClipboard>
          </div>
        </section>

        <GenPassword 
          setNewPassword={setNewPassword}
          setCheckOptions={setCheckOptions}
          checkOptions={checkOptions}
          setNewLength={setNewLength}
          newLength={newLength}
        />

        <section className='max-w-3xl card mx-auto mt-10'>
          <h2>What's a strong password anyway?</h2>
          <p>Long: The longer a password, the more secure it is. A strong password should be at least 12 characters long.</p>
          <p>Random: Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.</p>
          <p>Unique: A strong password should be unique to each account to reduce vulnerability in the event of a hack.</p>
        </section>

      </div>
    </div>
  );
}

export default App;
