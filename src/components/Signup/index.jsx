import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.scss'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignUp = (props) => {
  const { tabchange } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="sigup-container">
      <div className="bg-box">
        <div className="btn-wrapper">
          <Button type="primary" onClick={() => { tabchange("signin") }} >登 录</Button>
        </div>

      </div>
      <div className="login-box">
        <h3 style={{ fontSize: '22px', fontWeight: 800, textAlign: 'center', marginBottom: '15px' }}>注 册</h3>
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
            label="Username"
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
            label="Password"
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
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
        </Form>

      </div>

    </div>
  )
}

export default SignUp