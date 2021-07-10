import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const IntroImg = styled.div`
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1465572089651-8fde36c892dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1 {
    font-size: 40px;
    font-weight: 600;
  }
  h2 {
    margin-top: 10px;
    font-size: 22px;
    font-weight: 300;
    text-transform: uppercase;
  }
`;
const IntroMenu = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(129, 129, 129, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    font-size: 20px;
    margin: 0 30px;
  }
`;
const IntroTitle = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    font-weight: 600;
  }
  h3 {
    margin-top: 20px;
    font-size: 18px;
    color: rgba(129, 129, 129, 0.5);
  }
`;

const Introduce = () => {
  return (
    <IntroContainer>
      <IntroImg>
        <h1>화상영어 소개</h1>
        <h2>ido video english Education</h2>
      </IntroImg>
      <IntroMenu>
        <ul>
          <li>인사말</li>
          <li>교육시스템</li>
          <li>수업운영방안</li>
          <li>원어민교육센터</li>
          <li>오시는길</li>
        </ul>
      </IntroMenu>
      <IntroTitle>
        <h2>인사말</h2>
        <h3>행복한 시민, 자랑스런 대구</h3>
      </IntroTitle>
    </IntroContainer>
  );
};

export default Introduce;
