import React, { lazy, useState, Suspense, useMemo, useCallback, useContext } from 'react';
import { useSignin, useSignup } from './functions'
import { observer } from 'mobx-react';
import { StoresContext } from '../../store';
import './index.scss'

const Login = (props) => {

  const { loginStore } = useContext(StoresContext);
  
  const SignIn = lazy(() => import('../../components/SignIn'));
  const SignUp = lazy(() => import('../../components/Signup'))
  const [activity, setActivity] = useState("signin");

  const signin = useSignin(loginStore, props);
  const signup = useSignup(loginStore, props);

  const tabChange = useCallback((val) => {
    setActivity(val)
  }, [])

  return useMemo(() => {
    return (
      <div className="login-container">
        <Suspense fallback={<div>Loading...</div>}>
          <div className={`tab-change-wrap ${activity === 'signup' && 'go-left'}`}>
            <SignIn tabchange={tabChange} signin={signin} />
            <SignUp tabchange={tabChange} signup={signup} />
          </div>

        </Suspense>
      </div>
    )
  }, [activity, tabChange, signin, signup])
}

export default observer(Login)