import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const RegisterForm = () => {
  // context
  const { registerUser } = useContext(AuthContext);

  // local state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, setAlert] = useState(null);
  const { password, confirmPassword } = registerForm;
  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "password not match" });
      setTimeout(() => setAlert(null), 2000);
      return;
    }
    try {
      const registerData = await registerUser(registerForm);
      if (registerData.success) {
      } else {
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form className="my-4" onSubmit={onSubmitRegister}>
        <AlertMessage info={alert} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
      <p>
        {" "}
        Already have a account
        <Link to="/login">
          <Button variant="info" size="sm" className="ml-2">
            {" "}
            Login{" "}
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
