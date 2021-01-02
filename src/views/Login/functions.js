import {
  message
} from 'antd';
import {
  useCallback
} from 'react'

export const useSignin = (loginStore, props) => {
  return useCallback((user) => {
    const res = loginStore.can_be_signin(user);
    if (res.code === 1) {
      message.success('登录成功')
      props.history.push('/index')
    } else {
      message.error(res.msg)
    }
  }, [loginStore, props.history])
}

export const useSignup = (loginStore, props) => {
  return useCallback((user) => {
    const res = loginStore.addUser(user);
    if (res.code === 1) {
      message.success('注册，登录成功')
      props.history.push('/index')
    } else {
      message.error(res.msg)
    }
  }, [loginStore])
}