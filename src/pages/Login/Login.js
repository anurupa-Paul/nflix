import React, { useState } from 'react'
import './Login.css'
import nf1 from '../../assets/nf2.png'
import { login, signup } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [signState,setSignState] = useState("Sign In");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const user_auth = async (event)=>{
    event.preventDefault();
    try {
      if(signState === "Sign In"){
        await login(email,password);
        navigate("/");
      }
      else{
        await signup(name,email,password);
        setSignState("Sign In");
      }
    } catch (error) {
      // error already handled in login/signup
    }
  }
  return (
    <div className='login'>
      <img src={nf1} alt="" className='login-logo'/>
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {
            signState === "Sign Up" ? <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='your name'/> : <></>
          }
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='your email-id'/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='your password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className='remember_me'>
              <input type="checkbox"/>
              <label htmlFor=""> Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            signState === "Sign In"? <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign up now.</span></p> : <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign in now.</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login