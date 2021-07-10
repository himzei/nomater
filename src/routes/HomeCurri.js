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

const CurriGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  div:nth-child(1) {
    background-image: url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2053&q=80");
    background-position: center;
    background-size: cover;
    grid-column: 1/2;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div:nth-child(2) {
    background-image: url("https://images.unsplash.com/photo-1529869980459-ccdf511edf32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    background-position: center;
    background-size: cover;
    background-color: green;
    padding: 30px;
  }
  div:nth-child(3) {
    background-image: url("https://images.unsplash.com/photo-1517775762162-7202e1034d88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    background-position: center;
    background-size: cover;
    grid-column: 3/5;
    grid-row: 1/3;
    padding: 30px;
  }
  div:nth-child(4) {
    background-image: url("https://images.unsplash.com/photo-1614812513172-567d2fe96a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    background-position: center;
    background-size: cover;
    padding: 30px;
  }
  div:nth-child(5) {
    background-image: url("https://images.unsplash.com/photo-1614812514264-13a68dcdcf32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80");
    background-position: center;
    background-size: cover;
    padding: 30px;
  }
  div:nth-child(6) {
    background-image: url("https://images.unsplash.com/photo-1582642326207-e081ad739322?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80");
    background-position: center;
    background-size: cover;
    padding: 30px;
  }
  div:nth-child(7) {
    background-color: #ec7357;
    grid-column: 3/5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
  }
  h2 {
    margin-top: 5px;
    font-size: 40px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
  }
`;

const HomeCurri = () => {
  return (
    <>
      <MaterialContainer>
        <h1>영어학습의 시작과 마무리가지 체계적인 구성</h1>
        <h2>온라인 및 화상학습 등을 통해 영어실력이 한계 UPGRADE 됩니다.</h2>
      </MaterialContainer>
      <CurriGrid>
        <div>
          <h4>Junior</h4>
          <h2>Starter</h2>
        </div>
        <div>
          <h4>Junior</h4>
          <h2>basic</h2>
        </div>
        <div>
          <h4>senior</h4>
          <h2>
            Talking
            <br />
            class
          </h2>
        </div>
        <div>
          <h4>Junior</h4>
          <h2>intermediate</h2>
        </div>
        <div>
          <h4>Junior</h4>
          <h2>advanced</h2>
        </div>
        <div>
          <h4>Junior</h4>
          <h2>expert</h2>
        </div>
        <div>
          <h4>the learning process</h4>
          <h2>학습과정 바로가기</h2>
        </div>
      </CurriGrid>
    </>
  );
};

export default HomeCurri;
