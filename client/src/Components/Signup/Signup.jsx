import React from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'
function Signup() {
  const navigate = useNavigate()
  return (
    <div className='signupWrapper'>
        <div className="signupWrapperleft">
            <h2 className='signupHeading'>Social Bee</h2>
            <span className='signupTagline'>Connect with people, connect with the world....</span>
        </div>
        <div className="signupWrapperright">
            <div className="signupDiv">
                <div className="signupInputdiv">
                    <input type="text" className='signupInputfield' placeholder='Firstname'/>
                </div>
                <div className="signupInputdiv">
                    <input type="text" className='signupInputfield' placeholder='Username or Email'/>
                </div>
                <div className="signupInputdiv">
                    <input type="text" className='signupInputfield' placeholder='Password'/>
                </div>
                <span className='loginLinkspan'>Already have an account?
                <span className='loginLink' onClick={()=>{navigate('/login')}}> Signin now</span></span> 
                <button className='newAccountButton'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Signup

