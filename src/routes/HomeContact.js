import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";

const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const ContactText = styled.div`
  display: flex;
  padding-right: 70px;
  flex-direction: column;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    color: rgba(129, 129, 129, 0.7);
    text-decoration: underline;
  }
  h4 {
    margin-top: 20px;
    font-size: 18px;
    color: rgba(129, 129, 129, 0.5);
    line-height: 24px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 200px);
`;

const Grid1 = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f4f7f7;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    h3 {
      margin-top: 10px;
      font-size: 16px;
      color: rgba(129, 129, 129, 0.9);
    }
    div {
      margin-top: 10px;
      width: 200px;
      height: 40px;
      background-color: tomato;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: 5600;
      font-size: 18px;
    }
  }
  div:nth-child(2) {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Grid3 = styled.div`
  background-image: url("https://images.unsplash.com/photo-1571990678217-9ea41a3a06e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80");
  background-size: cover;
  background-position: center;
  grid-column: 1/3;
  padding: 30px;
  h4 {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
  }
  h2 {
    margin-top: 10px;
    font-size: 48px;
    font-style: italic;
    letter-spacing: 3px;
  }
  div {
    margin-top: 10px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    background-color: #0080ff;
    border-radius: 20px;
    color: white;
  }
`;

const HomeContact = () => {
  return (
    <ContactContainer>
      <ContactText>
        <h2>원격지원으로 문제를 해결</h2>
        <h4>
          회원님의 요청사항을 간편히 해결해드리기 위해 쉽고 빠른 웹기반 형식의
          원격지원 서비스를 제공하고 있습니다.
        </h4>
        <h3>회원님의 PC상태 및 화상장비를 점검하고 문제해결</h3>
        <h4>
          화상영어 고객센터에서 직접 인터넷을 통해 회원님의 PC상태 및 화상장비를
          점검하고 문제를 해결해 드리는 편리한 고객지원 서비스 입니다.
        </h4>
        <h4>
          원격지원을 신청하시기 전에 고객센터로 먼저 문의 하시길 바랍니다.
        </h4>
      </ContactText>
      <ContactGrid>
        <Grid1>
          <div>
            <h2>원격지원요청</h2>
            <h3>회원 원격지원 서비스 제공</h3>
            <div>원격서비스 신청하기</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faGalacticRepublic} size="7x" />
          </div>
        </Grid1>
        <Grid1>
          <div>
            <h2>원격지원요청</h2>
            <h3>회원 원격지원 서비스 제공</h3>
            <div>원격서비스 신청하기</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faGalacticRepublic} size="7x" />
          </div>
        </Grid1>
        <Grid3>
          <h4>customer center</h4>
          <h2>0532425454</h2>
          <div>월-금: 10:00~18:00</div>
        </Grid3>
      </ContactGrid>
    </ContactContainer>
  );
};

export default HomeContact;
