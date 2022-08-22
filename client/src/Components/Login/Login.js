import React from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'
function Login() {
    const navigate = useNavigate()
    return (
    <div className='loginWrapper'>
        <div className="loginWrapperleft">
            <h2 className='loginHeading'>Social Bee</h2>
            <span className='loginTagline'>Connect with people, connect with the world....</span>
        </div>
        <div className="loginWrapperright">
            <div className="loginDiv">
                <div className="loginInputdiv">
                    <input type="text" className='loginInputfield' placeholder='Username or Email'/>
                </div>
                <div className="loginInputdiv">
                    <input type="text" className='loginInputfield' placeholder='Password'/>
                </div>
                <button className='loginButton'>Login</button>
                <span className='forgotPasswordlink'>Forgot password?</span>
                <button className='newAccountButton' onClick={()=>{navigate('/signup')}}>Create a new account</button>
            </div>
        </div>
    </div>
  )
}

export default Login
