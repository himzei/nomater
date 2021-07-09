import { authService } from "fBase";
import React from "react";
import { firebaseInstance } from "../fBase";
import AuthForm from "../components/AuthForm";
import styled from "styled-components";

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button1 = styled.button`
  padding: 10px 0px;
  font-size: 18px;
  width: 425px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #db6400;
  border: none;
  color: white;
`;

const Button2 = styled(Button1)`
  background-color: #59886b;
`;

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <AuthForm />
      <AuthContainer>
        <Button1 onClick={onSocialClick} name="google">
          Google로 로그인 및 회원가입
        </Button1>
        <Button2 onClick={onSocialClick} name="github">
          Github로 로그인 및 회원가입
        </Button2>
      </AuthContainer>
    </div>
  );
};

export default Auth;
