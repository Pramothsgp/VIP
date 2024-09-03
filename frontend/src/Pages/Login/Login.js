import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login-form container">
	<div className="screen">
		<div className="screen_content">
			<form className="login">
				<div className="login_field">
					<input type="text" className="login_input" placeholder="User name / Email" />
				</div>
				<div className="login_field">
					<input type="password" className="login_input" placeholder="Password" />
				</div>
                      <p className='link_to_Signup'>Dont't have an account <Link to= '/signup'>Signup</Link></p>
				<button className="button login_submit">
					<span className="button_text">Log In</span>
                      </button>			
			</form>
		</div>
		<div className="screen_background">
			<span className="screen_background_shape screen_background_shape4"></span>
			<span className="screen_background_shape screen_background_shape3"></span>		
			<span className="screen_background_shape screen_background_shape2"></span>
			<span className="screen_background_shape screen_background_shape1"></span>
		</div>		
	</div>
</div>
  )
}

export default Login