import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./signup.component.scss";

import { Iauth } from "../../interfaces/auth";

interface Iprops {
    onAdd: (data: Iauth) => void;
  }
const SignUpForm = (props: Iprops) => {
    const [inputValue, setInputValue] = useState<Iauth>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const navigate = useNavigate();
    
      const onFinish = (values: any) => {
        console.log(values);  
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        props.onAdd(values);
        toast.success("Bạn vừa đăng ký thành công");
        navigate("/signin");
      };

  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="auth-form">
          <div className="signin-bg">
            <img src="../../../assets/images/login-bg.png" alt="" />
          </div>
          <div className="box-form">
            <h2>Đăng ký tài khoản</h2>
            <Form onFinish={onFinish}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tài khoản!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Tài khoản *"
                  type="text"
                />
              </Form.Item>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ tên!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Họ tên *"
                  type="text"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Mật khẩu *"
                />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Nhập lại mật khẩu *"
                />
              </Form.Item>
              <div className="button-group">
                <Button type="primary" htmlType="submit" className="btn btn-signin">
                  Đăng ký tài khoản
                </Button>
                <Link to="/signin" className="btn btn-signup">
                  Đăng nhập
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;