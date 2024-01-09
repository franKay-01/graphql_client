import { useState } from 'react';
import ScribbleImg from '../assets/pencil.png'
import LoginImg from '../assets/login_p.png'
import YouTubeImg from '../assets/youtube.svg'
import FacebookImg from '../assets/facebook.svg'
import InstagramImg from '../assets/instagram.svg'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { ShowToast } from '../components/showToast';
import useFunctions from '../utils/functions';
import { useNavigate } from "react-router-dom"

export default function Login(){
  const [loginSelect, setLoginSelect] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [country, setCountry] = useState(null)

  const router = useNavigate()

  const { signUp, signUserIn } = useFunctions();
  
  const [form, setForm] = useState({firstName: '', lastName:'', username: '', email: '', passcode: '', confirmPasscode: '', username: ''})

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
	}

  const changeUserChoice = (choice) => {
    setCountry(choice)
  }

  const checkCredentials = () => {
    if (form.passcode === form.confirmPasscode){
      return {"resp_code": true, "resp_desc": "Passwords match"}
    }else{
      return {"resp_code": false, "resp_desc": "Passwords do not match"}
    }
  }

  const loginUser = async () => {
    if (form.passcode === "" || form.username === ""){
      ShowToast('error', "Please fill all required fields")
      setIsLoading(false)
      return
    }

    const params = {"password": form.passcode, "username": form.username}

    setIsLoading(true)
    const { response_status, token, client_username, msg } = await signUserIn(params);
    if (response_status === true){
      setIsLoading(false)
      localStorage.setItem('username', client_username)
      localStorage.setItem('ttk', token);

      window.location.href = '/'
    }else{
      ShowToast("error", msg)
      setIsLoading(false)
    }
  }

  const areAnyValuesEmpty = () => {
    return Object.entries(form).some(([key, value]) => value === '');
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return regex.test(email);
  };

  const submitUserDetails = async () => {
    let {resp_code, resp_desc} = checkCredentials()
    if (!resp_code){
      ShowToast('error', resp_desc)
      return
    }

    if (areAnyValuesEmpty()){
      ShowToast("error", "All fields are required")
      return
    }

    if (!isValidEmail(form.email)){
      ShowToast('error', "Email is not valid")
      return
    }

    setIsLoading(true)

    const params = {
      "title": "Mr/Mrs",
      "first_name": form.firstName, 
      "last_name": form.lastName, 
      "email": form.email, 
      "country": country, 
      "password": form.passcode, 
      "username": form.username
    }

    const { response_code, msg } = await signUp(params);
    if (response_code === true){
      ShowToast("success", "Sign Up was successful")

      setForm({...form, firstName: '', lastName:'', username: '', email: '', passcode: '', confirmPasscode: '', username: ''})
      setCountry(null)

      setLoginSelect(true)
      setIsLoading(false)
      return
    }else{
      ShowToast("error", msg)
      setIsLoading(false)
      return
    }
    setIsLoading(false)
  }

  const countries = ['Ghana']

  return (
    <>
      <div className='page-ht flex justify-center items-center relative'>
        <img src={ScribbleImg} className="absolute scribble-1-p" alt=""/>
        <img src={ScribbleImg} className="absolute scribble-2-p" alt=""/>
        <img src={LoginImg} className="absolute scribble-3-p" alt=""/>
        <div className='page-div flex flex-col space-y-12 p-8'>
          <div className='flex flex-row space-x-8'>
            <div className='cursor-pointer' onClick={() => window.location.href = '/'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
            </div>
            <div className={`${loginSelect ? 'credential-header':'credential-header-alt'} cursor-pointer`} onClick={()=>setLoginSelect(true)}>Sign In</div>
            <div className={`${loginSelect ? 'credential-header-alt':'credential-header'} cursor-pointer`} onClick={()=>setLoginSelect(false)}>Sign Up</div>
            
          </div>
          {
            loginSelect ?
            <>
              <div className='flex flex-col space-y-4'>
                <input className='credential-input-b focus:outline-none' onChange={handleChange} name="username" placeholder='Username' type="text"/>
                <input className='credential-input-b focus:outline-none' onChange={handleChange} name="passcode" placeholder='Passcode' type="password"/>
              </div>
              <div>
                {isLoading ? 
                  <button className='credential-button'>
                    <span className="spinner-position spinner-position-alt">
                      <div class="w-6 h-6 rounded-full animate-spin border border-solid border-white border-t-transparent"></div>
                    </span>
                  </button>
                  :
                  <button className='credential-button' onClick={() => loginUser()}>
                    <h1 className='credential-button-text'>Sign In</h1>
                  </button>
                }
                <a href="/forgotten_password" className='underline cursor-pointer forgotten-link'>Forgotten Password</a>
              </div>
            </>
            :
            <>
              <div className='flex flex-col space-y-4'>
                <input onChange={handleChange} name="username" className='credential-input-b focus:outline-none' placeholder='Username' type="text"/>
                <input onChange={handleChange} name="firstName" className='credential-input-b focus:outline-none' placeholder='First Name' type="text"/>
                <input onChange={handleChange} name="lastName" className='credential-input-b focus:outline-none' placeholder='Last Name' type="text"/>
                <input onChange={handleChange} name="email" className='credential-input-b focus:outline-none' placeholder='Email Address' type="text"/>
                <input onChange={handleChange} name="passcode" className='credential-input-b focus:outline-none' placeholder='Passcode' type="password"/>
                <input onChange={handleChange} name="confirmPasscode" className='credential-input-b focus:outline-none' placeholder='Confirm Passcode' type="password"/>
                <Autocomplete
                  options={countries}
                  getOptionLabel={option => option}
                  value={country}
                  sx={{ width: '300px' }}
                  onChange={(event, newValue) => {
                    changeUserChoice(newValue);
                  }}
                  renderInput={params => (
                    <TextField {...params} variant="outlined" label="Select Country" />
                  )}
                />
              </div>
              <div>
                {isLoading ? 
                  <button className='credential-button'>
                    <span className="spinner-position spinner-position-alt">
                      <div class="w-6 h-6 rounded-full animate-spin border border-solid border-white border-t-transparent"></div>
                    </span>
                  </button>
                  :
                  <button className='credential-button' onClick={() => submitUserDetails()}>
                    <h1 className='credential-button-text'>Sign Up</h1>
                  </button>
                }
              </div>
            </>
          }
          
          <div class="gradLine3"></div>
          {loginSelect ? 
            <div className='flex flex-col items-center justify-center'>
              <h1 className='flex justify-center social-text'>Follow Us!</h1>
              <div className='flex flex-row space-x-4 mt-4'>
                <img className='social-handle-p' src={FacebookImg} alt=""/>
                <img className='social-handle-p' src={InstagramImg} alt=""/>
                <img className='social-handle-p' src={YouTubeImg} alt=""/>
              </div>
            </div>
            : 
            null
          }
          
        </div>
      </div>
    </>
  )
}