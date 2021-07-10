import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const IntroContents = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const IntroContent = styled.div`
  background-image: url("https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
`;
const IntroGreeting = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin-left: 20px;
  h2 {
    font-size: 40px;
    font-weight: 600;
  }
  h3 {
    font-size: 24px;
    margin: 20px 0;
  }
  h4 {
    font-size: 20px;
    color: rgba(129, 129, 129, 0.7);
    margin-top: 24px;
    line-height: 24px;
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
      <IntroContents>
        <IntroContent></IntroContent>
        <IntroGreeting>
          <h2>Online IVY</h2>
          <h3>온라인아이비 화상영어 홈페이지를 방문해 주셔서 감사합니다.</h3>
          <h4>
            활기찬 학생 여분의 모습에서 우리는 내일의 희망과 밝은 미래를
            확인합니다.
          </h4>
          <h4>
            새 시대의 주인공이 될 여러분들이 세계 여러 나라 친구들과 함께
            자유롭게 소통하고 교류하며 꿈과 비전을 키워 나가는 모습을 상상해
            봅니다.
          </h4>
          <h4>
            세계인이 널리 사용하는 언어인 영어에 대한 흥미를 높이고, 영어
            실력향상에 도움을 드리고자 "원어민 화상영어 교육"을 실시합니다.
          </h4>
          <h4>
            학생 여러분의 많은 방문과 이용을 부탁드리며, 지구촌 친구들과 더불어
            세계로 나아가는 힘찬 청년으로 성장하길 기대합니다.
          </h4>
          <h4>감사합니다.</h4>
        </IntroGreeting>
      </IntroContents>
    </IntroContainer>
  );
};

export default Introduce;
