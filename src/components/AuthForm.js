import { authService } from "fBase";
import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 48px;
    font-weight: 600;
  }
  h3 {
    font-size: 20px;
    color: rgba(129, 129, 129, 0.5);
    margin-top: 20px;
  }
`;

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px 10px;
  width: 400px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const InputBtn = styled(Input)`
  width: 425px;
  border-radius: 5px;
  padding: 10px 0;
  border: 1px solid rgba(129, 129, 129, 0.5);
`;

const Disting = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <LoginContainer>
        <h2>로그인</h2>
        <h3>로그인을 하시면 더욱 편리하게 컨텐츠를 이용하실 수 있습니다.</h3>
      </LoginContainer>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          required
          onChange={onChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          required
          onChange={onChange}
        />
        <InputBtn type="submit" value={newAccount ? "회원가입" : "로그인"} />
        {error}
      </Form>
      <Disting onClick={toggleAccount}>
        {newAccount ? "Signin" : "Create Account"}
      </Disting>
    </>
  );
};
export default AuthForm;
