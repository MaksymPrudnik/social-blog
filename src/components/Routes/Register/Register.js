import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { 
  setUsernameAction,
  setEmailAction, 
  setPasswordAction 
} from '../../../state/actions/credentialsActions';
import { requestRegisterAction } from '../../../state/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

import './Register.css';
import Loader from '../../helpers/Loader/Loader';

const Register = () => {
  const dispatch = useDispatch();
  const { username, email, password } = useSelector(state => state.credentials);
  const { isPending, jwt, error } = useSelector(state => state.auth);
  return (
    <section className='register-section'>
      <main className="pa4 black-80 signin-box">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="username"  
                id="username" 
                onChange={(event) => dispatch(setUsernameAction(event.target.value))}
                />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" 
                onChange={(event) => dispatch(setEmailAction(event.target.value))}
                />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password" 
                onChange={(event) => dispatch(setPasswordAction(event.target.value))}
                />
            </div>
          </fieldset>
          <div>
            <input 
              className="register-button b ph3 pv2 input-reset ba b--black bg-transparent grow pointer dib" 
              type="submit" 
              value="Register" 
              onClick={() => requestRegisterAction(dispatch, username, email, password)}
            />
          </div>
          <div className="lh-copy mt3">
            <Link to='/signin' className="f6 link dim black db pointer">Sign In</Link>
          </div>
          <div className='fail-message'>
            {
              isPending ? <Loader size='3rem'/>
              : (error && error) || (jwt && <Redirect to='/'/>)
            }
          </div>
        </div>
      </main>
    </section>
  )
}

export default Register;