import Tweet from "../components/Tweet";
import TweetFactory from "../components/TweetFactory";
import React, { useState, useEffect } from "react";
import { dbService } from "../fBase";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";

const MainContainer = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  height: 700px;
  background-image: url("https://images.unsplash.com/photo-1471873814584-2120e5ec0211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-position: center;
  background-size: cover;
`;

const MainOpacity = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 700px;
`;

const MainImageText = styled.div`
  top: 200px;
  left: 200px;

  height: 100%;
  position: absolute;
  color: white;
  font-size: 40px;
  h2 {
    font-size: 60px;
  }
  h4 {
    margin-top: 20px;
    font-weight: 300;
  }
  h5 {
    margin-top: 100px;
    font-size: 24px;
    font-weight: 300;
    line-height: 30px;
  }
`;

const BlockContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 60%;
  display: grid;
  grid-template-columns: repeat(3, 190px);
  grid-template-rows: repeat(3, 190px);
`;

const Grid1 = styled.div`
  background-color: #f38ba0;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  h4 {
    font-size: 12px;
    padding-top: 10px;
  }
  div {
    width: 100px;
    height: 100px;
    background-color: white;
    margin-top: 10px;
    border-radius: 50%;
    color: #f38ba0;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Grid2 = styled(Grid1)`
  background-color: #005792;
  div {
    color: #005792;
  }
`;
const Grid3 = styled(Grid1)`
  background-color: #480032;
`;
const Grid4 = styled(Grid1)`
  background-color: #39a9cb;
`;
const Grid5 = styled(Grid1)`
  background-color: #f55c47;
`;
const Grid6 = styled(Grid1)`
  background-color: #926e6f;
`;
const Grid7 = styled(Grid1)`
  background-color: #1f441e;
`;
const Grid8 = styled.div`
  grid-column: 2/4;
  background-color: white;
  padding: 18px;
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  ul {
    margin-top: 10px;
    padding: 5px 0;
    border-top: 2px solid rgba(129, 129, 129, 0.5);
    li {
      padding-top: 5px;
      font-size: 18px;
      font-weight: 300;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.9);
      border-bottom: 1px solid rgba(129, 129, 129, 0.3);
    }
  }
`;

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

const Home = ({ userObj }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    dbService.collection("tweets").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  return (
    <div>
      <MainContainer>
        <MainImage />
        <MainOpacity />
        <MainImageText>
          <h2>아이두 화상영어</h2>
          <h4>수준별 맞춤학습 + 스스로 자기학습</h4>
          <h5>
            해외 현지에 있는 원어민 강사와 화상을 통해 구성된
            <br />
            획기적인 양질의 영어프로그램을 제공합니다.
          </h5>
        </MainImageText>
        <BlockContainer>
          <Grid1>
            <h2>강의실 입장</h2>
            <h4>원어민 화상영어 강의실에 입장합니다.</h4>
            <div>
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </Grid1>
          <Grid2>
            <h2>강의실 입장</h2>
            <h4>원어민 화상영어 강의실에 입장합니다.</h4>
            <div>
              <FontAwesomeIcon icon={faGalacticRepublic} />
            </div>
          </Grid2>
          <Grid3>
            <h2>강의실 입장</h2>
            <h4>원어민 화상영어 강의실에 입장합니다.</h4>
            <div></div>
          </Grid3>
          <Grid4>
            <h2>강의실 입장</h2>
            <h4>원어민 화상영어 강의실에 입장합니다.</h4>
            <div></div>
          </Grid4>
          <Grid5>
            <h2>강의실 입장</h2>
            <h4>원어민 화상영어 강의실에 입장합니다.</h4>
            <div></div>
          </Grid5>
          <Grid6>
            <h2>강의실 입장</h2>
            <h4>원어민 화상영어 강의실에 입장합니다.</h4>
            <div></div>
          </Grid6>
          <Grid7>
            <h2>강의실 입장</h2>
            <h4>원어민 화상영어 강의실에 입장합니다.</h4>
            <div></div>
          </Grid7>
          <Grid8>
            <h2>공지사항</h2>
            <ul>
              <li>2021년 출석현황 알림</li>
              <li>2021년 성적표현황 알림</li>
              <li>2021년 화상프로그램 보다 수동 설치방법</li>
              <li>2021년 대구시 원어민 화상영어 수강생 알림</li>
            </ul>
          </Grid8>
        </BlockContainer>
      </MainContainer>
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
            <span>Junior</span>
            <span>교재안내</span>
          </MaterialBox>
          <MaterialBox>Senior 교재안내</MaterialBox>
        </MaterialTwo>
      </MaterialContainer>
      <TweetFactory userObj={userObj} />
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
