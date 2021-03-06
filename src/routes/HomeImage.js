import React from "react";
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

const HomeImage = () => {
  return (
    <MainContainer>
      <MainImage />
      <MainOpacity />
      <MainImageText>
        <h2>????????? ????????????</h2>
        <h4>????????? ???????????? + ????????? ????????????</h4>
        <h5>
          ?????? ????????? ?????? ????????? ????????? ????????? ?????? ?????????
          <br />
          ???????????? ????????? ????????????????????? ???????????????.
        </h5>
      </MainImageText>
      <BlockContainer>
        <Grid1>
          <h2>????????? ??????</h2>
          <h4>????????? ???????????? ???????????? ???????????????.</h4>
          <div>
            <FontAwesomeIcon icon={faCamera} />
          </div>
        </Grid1>
        <Grid2>
          <h2>????????? ??????</h2>
          <h4>????????? ???????????? ???????????? ???????????????.</h4>
          <div>
            <FontAwesomeIcon icon={faGalacticRepublic} />
          </div>
        </Grid2>
        <Grid3>
          <h2>????????? ??????</h2>
          <h4>????????? ???????????? ???????????? ???????????????.</h4>
          <div></div>
        </Grid3>
        <Grid4>
          <h2>????????? ??????</h2>
          <h4>????????? ???????????? ???????????? ???????????????.</h4>
          <div></div>
        </Grid4>
        <Grid5>
          <h2>????????? ??????</h2>
          <h4>????????? ???????????? ???????????? ???????????????.</h4>
          <div></div>
        </Grid5>
        <Grid6>
          <h2>????????? ??????</h2>
          <h4>????????? ???????????? ???????????? ???????????????.</h4>
          <div></div>
        </Grid6>
        <Grid7>
          <h2>????????? ??????</h2>
          <h4>????????? ???????????? ???????????? ???????????????.</h4>
          <div></div>
        </Grid7>
        <Grid8>
          <h2>????????????</h2>
          <ul>
            <li>2021??? ???????????? ??????</li>
            <li>2021??? ??????????????? ??????</li>
            <li>2021??? ?????????????????? ?????? ?????? ????????????</li>
            <li>2021??? ????????? ????????? ???????????? ????????? ??????</li>
          </ul>
        </Grid8>
      </BlockContainer>
    </MainContainer>
  );
};

export default HomeImage;
