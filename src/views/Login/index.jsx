import React, { lazy, useState, Suspense, useMemo } from 'react';
import './index.scss'

const Login = (prop) => {

  const SignIn = lazy(() => import('../../components/SignIn'));
  const SignUp = lazy(() => import('../../components/Signup'))
  const [activity, setActivity] = useState("signin");

  const tabChange = (val) => {
    setActivity(val)
  }

  return useMemo(() => {
    return (
      <div className="login-container">
        <Suspense fallback={<div>Loading...</div>}>
          <div className={`tab-change-wrap ${activity==='signup'&&'go-left'}`}>
            <SignIn tabchange={tabChange} />
            <SignUp tabchange={tabChange} />
          </div>
          
        </Suspense>
      </div>
    )
  }, [activity])
}

export default Login