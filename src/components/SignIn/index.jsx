import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.scss'

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};

const SignIn = (props) => {
  const { tabchange, signin } = props;

  const onFinish = (values) => {
    signin(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="sigin-container">
      <div className="bg-box">
        <div className="btn-wrapper">
          <Button type="primary" onClick={()=>{tabchange("signup")}} >注册</Button>
        </div>
        
      </div>
      <div className="login-box">
        <h3 style={{ fontSize: '22px', fontWeight: 800, textAlign: 'center', marginBottom: '15px' }}>登 录</h3>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住登录</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">登 录</Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  )
}

export default SignIn