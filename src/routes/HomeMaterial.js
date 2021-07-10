import React from "react";
import styled from "styled-components";

const MaterialContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  h1 {
    font-size: 48px;
    font-weight: 600;
  }
  h2 {
    margin-top: 25px;
    font-size: 20px;
    line-height: 22px;
    color: rgba(129, 129, 129, 0.5);
    text-align: center;
  }
`;

const MaterialTwo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const MaterialBox = styled.div`
  width: 100%;
  height: 350px;
  margin: 0 20px;
  padding: 20px 0;
  border-top: 2px solid #f14668;
  display: flex;
  flex-direction: column;
  span:first-child {
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 600;
    color: #f14668;
  }
  span:nth-child(2) {
    font-size: 24px;
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
  }
`;

const MaterialBoxContent = styled.div`
  display: flex;
  margin-top: 30px;
`;
const MaterialImg = styled.img`
  width: 200px;
  height: 280px;
`;
const MaterialRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  h2 {
    text-align: left;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
  }
  h3 {
    margin-top: 10px;
    font-size: 48px;
    font-weight: 600;
    color: #f14668;
  }
  span {
    margin-top: 20px;
    display: inline-flex;
    background-color: #f14668;
    color: white;
    padding: 5px 10px;
    font-size: 20px;
  }
  h5 {
    margin-top: 20px;
    font-size: 18px;
    line-height: 24px;
  }
`;

const HomeMaterial = () => {
  return (
    <MaterialContainer>
      <h1>신개념 통합 영어교육</h1>
      <h2>
        온라인 및 화상학습 등 다양한 학습도구들을 활용하여 학습자 스스로가
        학습과정에서부터 평가, 피드백까지 진행함으로써
        <br />
        의사소통중심 학습을 완성시켜주는 통합영어학습 시스템입니다.
      </h2>
      <MaterialTwo>
        <MaterialBox>
          <div>
            <span>Junior</span>
            <span>교재안내</span>
          </div>
          <MaterialBoxContent>
            <MaterialImg src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
            <MaterialRight>
              <h2>Conversation</h2>
              <h3>Expert</h3>
              <span>SELF UP 1-6</span>
              <h5>
                화상영어는 수업에 대해 데이터로 분석해 줍니다. 영역별 학습상태는
                수업 후 매달 월말평가서가 작성됩니다.
              </h5>
            </MaterialRight>
          </MaterialBoxContent>
        </MaterialBox>
        <MaterialBox>
          <div>
            <span>Junior</span>
            <span>교재안내</span>
          </div>
          <MaterialBoxContent>
            <MaterialImg src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
            <MaterialRight>
              <h2>Conversation</h2>
              <h3>Expert</h3>
              <span>SELF UP 1-6</span>
              <h5>
                화상영어는 수업에 대해 데이터로 분석해 줍니다. 영역별 학습상태는
                수업 후 매달 월말평가서가 작성됩니다.
              </h5>
            </MaterialRight>
          </MaterialBoxContent>
        </MaterialBox>
      </MaterialTwo>
    </MaterialContainer>
  );
};

export default HomeMaterial;
