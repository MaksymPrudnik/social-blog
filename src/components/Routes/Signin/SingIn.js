import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestLoginAction } from '../../../state/actions/authActions';

import './Signin.css';
import Loader from '../../helpers/Loader/Loader';
import { useFormInput } from '../../../hooks/hooks';
import { useEffect } from 'react';

const SignIn = () => {
  const dispatch = useDispatch();
  const email = useFormInput('');
  const password = useFormInput('');
  const { isPending, error, jwt } = useSelector(state => state.auth);

  useEffect(() => {
    if (jwt) {
      localStorage.setItem('token', jwt)
    }
  }, [jwt])

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
                value={email.value}
                onChange={email.onChange}
                />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password" 
                value={password.value}
                onChange={password.onChange}
                />
            </div>
          </fieldset>
          <div>
            <button 
              className="signin-button b ph3 pv2 input-reset ba b--black bg-transparent grow pointer dib" 
              onClick={() => requestLoginAction(dispatch, email.value, password.value)}
            >Sign in </button>
          </div>
          <div className="lh-copy mt3">
            <Link to='/register' className="f6 link dim black db pointer">Register</Link>
          </div>
          <div className='fail-message'>
            {
              isPending ? <Loader size='3rem'/>
              : (jwt && <Redirect to='/'/>) || (error && error)
            }
          </div>
        </div>
      </main>
    </section>
  )
}

export default SignIn;