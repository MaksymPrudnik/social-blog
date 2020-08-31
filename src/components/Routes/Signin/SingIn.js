import React from 'react';
import { Link } from 'react-router-dom';

import './Signin.css';

const SignIn = () => {
  return (
    <section className='signin-section'>
      <main className="pa4 black-80 signin-box">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" 
                required
                />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password" 
                required
                />
            </div>
          </fieldset>
          <div>
            <input 
              className="signin-button b ph3 pv2 input-reset ba b--black bg-transparent grow pointer dib" 
              type="submit" 
              value="Sign in" 
            />
          </div>
          <div className="lh-copy mt3">
            <Link to='/register' className="f6 link dim black db pointer">Register</Link>
          </div>
          <div className='fail_message fw6' style={{
            backgroundColor: "#af111166",
            fontSize: '1.2rem',
            color: '#000',
            lineHeight: '40px'
            }}>
            <p></p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default SignIn;