import React, { FC, useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const LoginForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { error } = useTypedSelector((state) => state.auth);

  const { login } = useActions(AuthActionCreators);

  useEffect(() => {
    if (error) message.error(error);
  }, [error]);

  const onFinish = async (values: any) => {
    setIsLoading(true);
    await login(values.username, values.password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Пароль" name="password" rules={[rules.required()]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Запомнить</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
