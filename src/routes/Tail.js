import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faInstagram, faYoutube);

const BorderLine = styled.div`
  border-top: 2px solid rgba(129, 129, 129, 0.2);
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    color: rgba(129, 129, 129, 0.5);
  }
  h5 {
    text-transform: uppercase;
    margin-top: 5px;
    color: rgba(129, 129, 129, 0.8);
    font-size: 18px;
  }
`;

const ContainerIcon = styled.div`
  display: flex;
  color: white;
  font-size: 22px;
  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4f86c6;
    margin-right: 5px;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ee7785;
    margin-right: 5px;
  }
  div:nth-child(3) {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #5cab7d;
    margin-right: 5px;
  }
  div:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #e71d36;
  }
`;

const Tail = () => {
  return (
    <>
      <BorderLine />
      <Container>
        <ContainerText>
          <h4>
            아이두 화상영어 주소: 대구광역시 중구 국채보상로 123길 16, 3층
            대표번호: 053-242-5454
          </h4>
          <h5>copyright all rigths reserved 2021 by Ido english</h5>
        </ContainerText>
        <ContainerIcon>
          <div>
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </div>
          <div>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </div>
          <div>blog</div>
          <div>
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </div>
        </ContainerIcon>
      </Container>
    </>
  );
};

export default Tail;
