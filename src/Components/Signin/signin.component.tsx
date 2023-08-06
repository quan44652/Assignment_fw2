/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import instance from "../../apis/instance";
import { Link, useNavigate } from "react-router-dom";
import "./signin.component.scss";
const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
       try {
      const { data } = await instance.post("/signin", values);
      
      localStorage.setItem("token", JSON.stringify(data.accsetToken));
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.user.role === "admin") {
        message.success("Chào mừng bạn đến với trang quản trị");
        navigate("/admin/products");
      } else {
        message.success("Đăng nhập thành công");
        navigate("/");
      }
    } catch (error) {
      message.error("Sai Tài Khoản hoặc Mật Khẩu");
    }
  };

  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="signin-form">
          <div className="signin-bg">
            <img src="../../../assets/images/login-bg.png" alt="" />
          </div>
          <div className="box-form">
            <h2>Đăng nhập</h2>
            <Form onFinish={onFinish}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email của bạn!",
                  },
                ]}
              >
                <Input placeholder="Email của bạn" type="text" />
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
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
              <div className="button-group">
                <Button type="primary" htmlType="submit" className="btn btn-signin">
                  Đăng nhập
                </Button>
                <Link to="/signup" className="btn btn-signup">
                  Đăng ký
                </Link>
              </div>
              <p className="forgotpass">
                <Link to="/">
                  <ArrowLeftOutlined />
                  Trở về
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
